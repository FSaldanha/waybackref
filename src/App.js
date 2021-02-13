import WaybackRef from './waybackref'
import { useState, useEffect, useRef } from 'react';
import { createIntl, createIntlCache, RawIntlProvider, FormattedMessage } from 'react-intl'
import translations from './translations.json'
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import { stateToHTML } from 'draft-js-export-html';

const editorText = <FormattedMessage id="editor" />

export default function App() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const editor = useRef(null);
  const focusEditor = _ => editor.current.focus();

  const [style, setStyle] = useState("");
  const [results, setResults] = useState("");
  const [locale, setLocale] = useState(navigator.language);
  const [styleError, setStyleError] = useState("");
  const [submitBtnClasses, setSubmitBtnClasses] = useState("btn disabled");
  const [loading, setLoading] = useState(false);
  const [editorIsBlank, isEditorBlank] = useState(true);

  const changeLanguage = _ => {
    if (locale == "pt-BR") {
      setLocale("en-US");
    } else {
      setLocale("pt-BR");
    }
  }

  useEffect(() => {
    isEditorBlank(!editorState.getCurrentContent().getPlainText());
    if (editorIsBlank) {
      setSubmitBtnClasses("btn disabled");
    } else {
      setSubmitBtnClasses("btn");
    }
  }, [editorState]);

  useEffect(() => setLoading(false), [results]);

  const handleRefsChange = async _ => {
    if (!editorIsBlank) {
      if (!style) {
        setStyleError(<FormattedMessage id="no_style_selected" />);
        document.querySelector('.editor').style.borderColor = "red";
      } else {
        document.querySelector('#first-step').style.display = "none";
        document.querySelector('#second-step').style.display = "block";
        const contentState = editorState.getCurrentContent();
        const refs = stateToHTML(contentState);
        setEditorState(() => EditorState.createEmpty());
        isEditorBlank(true);
        setStyleError("");
        setLoading(true);
        const values = await WaybackRef(refs, locale, style);
        setResults(
          <div>
            <p className="status">
              <FormattedMessage
                id="results"
                values={{
                  TR: values.TR,
                  RWU: values.RWU,
                  RWD: values.RWD,
                  RWOU: values.RWOU
                }}
              />
            </p>
            <div
              id="results"
              className="editor"
              dangerouslySetInnerHTML={{
                __html: values.refs
              }}
            ></div>
          </div>
        );
      }
    }
  }

  const restart = _ => {
    document.querySelector('#first-step').style.display = "block";
    document.querySelector('#second-step').style.display = "none";
    document.querySelector('.editor').style.borderColor = "#ccc";
    setResults("");
  }

  const cache = createIntlCache();
  const intl = createIntl({
    locale: locale,
    defaultLocale: "en-US",
    messages: translations[locale]
  }, cache)

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const copy = _ => {
    const str = document.querySelector("#results").innerHTML;
    function listener(e) {
      e.clipboardData.setData("text/html", str);
      e.clipboardData.setData("text/plain", str);
      e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    alert(intl.formatMessage({ id: 'copied' }));
  }

  return (
    <RawIntlProvider value={intl}>
      <div>
        <header>
          <div className="container">
            <h1>Wayback References</h1>
            <div className="menu">
              <span onClick={changeLanguage}>
                <FormattedMessage id="change_language" />
              </span>
              <a href="#about" onClick={scrollToAbout}>
                <FormattedMessage id="about-label" />
              </a>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <div id="first-step">
              <h2><FormattedMessage id="subtitle" /></h2>
              <div
                className="editor"
                onClick={focusEditor}
              >
                <Editor
                  ref={editor}
                  editorState={editorState}
                  onChange={setEditorState}
                  placeholder={editorText}
                />
              </div>
              <p>
                <FormattedMessage id="style" />:
              <select onChange={e => setStyle(e.target.value)}>
                  <option value=""></option>
                  <option value="ABNT">ABNT</option>
                  <option value="APA">APA</option>
                  <option value="Chicago">Chicago</option>
                  <option value="ISO">ISO</option>
                </select>
                <span className="error">{styleError}</span>
              </p>
              <div className="btn-parent">
                <span className={submitBtnClasses} onClick={handleRefsChange}>
                  <FormattedMessage id="btn" />
                </span>
              </div>
            </div>
            <div id="second-step">
              {loading &&
                <div className="loading">
                  <div id="loader" />
                  <p><FormattedMessage id="loading" /></p>
                </div>}
              {results}
              <div className="btn-parent">
                {!loading &&
                  <span className="btn" onClick={copy}>
                    <FormattedMessage id="copy" />
                  </span>
                }
                <span className="btn" onClick={restart}>
                  <FormattedMessage id="restart" />
                </span>
              </div>
            </div>
          </div>
        </main>
        <section id="about">
          <div className="container">
            <hr />
            <FormattedMessage
              id="about"
              values={{
                p: chunks => <p>{chunks}</p>,
                strong: chunks => <strong>{chunks}</strong>,
                wm: chunks => <a href="https://web.archive.org/" target="_blank">{chunks}</a>,
                ia: chunks => <a href="https://archive.org/" target="_blank">{chunks}</a>,
                doi: chunks => <a href="https://www.doi.org/" target="_blank">{chunks}</a>
              }}
            />
            <hr />
          </div>
        </section>
        <footer>
          <div className="container">
            <p><FormattedMessage id="created-by" /> <a href="https://fsaldanha.com.br/" target="_blank">Felipe Saldanha</a></p>
            <p><a href="https://github.com/FSaldanha/waybackref" target="_blank"><FormattedMessage id="github" /></a></p>
          </div>
        </footer>
      </div>
    </RawIntlProvider >
  );
}

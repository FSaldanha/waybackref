export default async function WaybackRef(list, locale = navigator.language, style = "ABNT", debug = false) {
  const log = log => debug && console.log(log);

  log("Loading...");

  if (!locale) locale = "en-US";
  log("locale = " + locale);

  const refs = list.split(/\r?\n/).filter(el => el.match(/[^ ]+/));
  const new_refs = [];

  log(`Found ${refs.length} reference(s).`)

  let refs_with_url = 0;
  let refs_with_doi = 0;
  let refs_without_url = 0;

  for (const ref of refs) {
    let final_ref;

    // get url
    const initial_url = /https?:\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?/i.exec(ref);
    const is_doi = /doi.org/.exec(initial_url);
    if (initial_url && !is_doi) {
      const url = initial_url[0].slice(0, -1);
      refs_with_url++;

      // get date
      let dates;
      if (style == "ABNT") { dates = ref.match(/\d{1,2}\s+\w+\.?\s+\d{4}/gi); locale = "pt-BR" };
      // log("locale = " + locale);
      if (style == "APA") dates = ref.match(/\d{4},?\s+\w+\s+\d{1,2}/gi);
      if (style == "ISO") dates = ref.match(/\d{1,2}\s+\w+\s+\d{4}/gi);
      if (style == "Chicago") dates = ref.match(/\w+\s+\d{1,2},?\s+\d{4}/gi);

      let response;
      // log(dates);
      if (dates) {
        // let initial_date = dates[dates.length - 1].toString();
        const initial_date = dates.map(e => e).pop().toString();
        let [day, month, year] = initial_date.split(/\s+/);
        const month_abbrev = month.substr(0, 3);
        const months = [];
        months["pt-BR"] = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
        months["en-US"] = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        let month_no = months[locale].findIndex(el => el == month_abbrev) + 1;
        const format2algs = (...el) => el.map(no => ('0' + no).slice(-2));
        [month_no, day] = format2algs(month_no, day);
        const date = `${year}${month_no}${day}`

        // get WM url
        response = await fetch(`https://archive.org/wayback/available?url=${url}&timestamp=${date}`);
      } else {
        response = await fetch(`https://archive.org/wayback/available?url=${url}`);
      }
      const data = await response.json();
      const is_available = data.archived_snapshots;
      const wm_url = (Object.keys(is_available).length !== 0) ? is_available.closest.url : url;

      //update refs
      const clone_ref = JSON.parse(JSON.stringify(ref));
      final_ref = clone_ref.replace(url, wm_url);
    } else if (is_doi) {
      refs_with_url++;
      refs_with_doi++;
      final_ref = ref;
    } else {
      refs_without_url++;
      final_ref = ref;
    }

    new_refs.push(final_ref);
  }

  log(`${refs_with_url} reference(s) have URL.`)
  log(`${refs_without_url} reference(s) have no URL.`)
  return {
    refs: new_refs.join('<p>&nbsp;</p>'),
    TR: refs.length,
    RWU: refs_with_url,
    RWD: refs_with_doi,
    RWOU: refs_without_url
  }
}
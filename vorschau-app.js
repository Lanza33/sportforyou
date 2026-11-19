/* ------------------------------------------------------------------
   Statische Vorschau des SportForYou-Shopify-Themes.
   Produkte, Preise, Texte und Fotos stammen von sportforyou.net
   (vorschau-daten.js). Bilder werden direkt von sportforyou.net geladen.
------------------------------------------------------------------- */
const FREE = 99;
const SITE = 'https://sportforyou.net';
const OPC = SITE + '/media/image/opc/md/Homepage%20Kategorien/';
const D = window.SFY_DATA || {prods:[], catimg:{}, home:{}};
const P = D.prods;
/* Produkttexte je Sprache (p.tr.de / p.tr.en von den DE/EN-Seiten von sportforyou.net) */
P.forEach(p => {
  const it = {};
  ['t','sd','ds','at','va','dl'].forEach(f => {
    it[f] = p[f];
    Object.defineProperty(p, f, {get(){ const v = lang !== 'it' && p.tr && p.tr[lang] && p.tr[lang][f]; return v && (!Array.isArray(v) || v.length) ? v : it[f]; }});
  });
});

const L = {
  it:{ann1:"Spedizione gratuita in Italia da 99 €",ann2:"Consegna rapida da Bolzano con OMEST Express Logistic",home:"Home",cats:"Categorie",search:"Cerca",wish:"Preferiti",cart:"Carrello",add:"Aggiungi al carrello",added:"Aggiunto al carrello",viewall:"Vedi tutti",onreq:"Prezzo su richiesta",ask:"Richiedi offerta",free:"Spedizione gratuita raggiunta! 🎉",left:"Ti mancano <b>{x}</b> per la spedizione gratuita",sub:"Subtotale",disc:"Sconto",total:"Totale",checkout:"Vai alla cassa",code:"Codice sconto",apply:"Applica",empty:"Il tuo carrello è vuoto.",xs:"Completa il tuo ordine",tax:"IVA inclusa.",instock:"Disponibilità immediata",low:"Scarsa disponibilità",out:"Attualmente non disponibile",ckT:"Cookie & privacy",ckP:"Usiamo cookie tecnici e, con il tuo consenso, cookie di analisi e marketing.",ckN:"Solo necessari",ckY:"Accetta tutti",sort:"Ordina per",filters:"Filtri",results:"{x} prodotti",best:"Bestseller",top:"Top",pre:"Preordina",req:"Su richiesta",last:"Ultimi pezzi",soldout:"Esaurito",wishE:"Nessun prodotto nei preferiti.",recent:"Visti di recente",soon:"Prodotti in arrivo",soonP:"Questa categoria è in preparazione. Scrivici: ti aiutiamo a trovare il prodotto giusto.",deliv:"Tempi di consegna",orig:"Vedi su sportforyou.net",rm:"Rimuovi",nores:"Nessun prodotto trovato."},
  de:{ann1:"Gratisversand in Italien ab 99 €",ann2:"Schnelle Lieferung aus Bozen mit OMEST Express Logistic",home:"Start",cats:"Kategorien",search:"Suche",wish:"Merkliste",cart:"Warenkorb",add:"In den Warenkorb",added:"In den Warenkorb gelegt",viewall:"Alle ansehen",onreq:"Preis auf Anfrage",ask:"Angebot anfragen",free:"Gratisversand erreicht! 🎉",left:"Noch <b>{x}</b> bis zum Gratisversand",sub:"Zwischensumme",disc:"Rabatt",total:"Gesamt",checkout:"Zur Kasse",code:"Rabattcode",apply:"Einlösen",empty:"Dein Warenkorb ist leer.",xs:"Passt dazu",tax:"Inkl. MwSt.",instock:"Sofort lieferbar",low:"Geringer Lagerbestand",out:"Derzeit nicht verfügbar",ckT:"Cookies & Datenschutz",ckP:"Wir nutzen technische Cookies und mit deiner Zustimmung Analyse- und Marketing-Cookies.",ckN:"Nur notwendige",ckY:"Alle akzeptieren",sort:"Sortieren",filters:"Filter",results:"{x} Produkte",best:"Bestseller",top:"Top",pre:"Vorbestellen",req:"Auf Anfrage",last:"Nur noch wenige",soldout:"Ausverkauft",wishE:"Noch nichts auf der Merkliste.",recent:"Zuletzt angesehen",soon:"Produkte folgen",soonP:"Diese Kategorie wird gerade aufgebaut. Schreib uns – wir helfen dir, das passende Produkt zu finden.",deliv:"Lieferzeit",orig:"Auf sportforyou.net ansehen",rm:"Entfernen",nores:"Keine Produkte gefunden."},
  en:{ann1:"Free shipping in Italy on orders over €99",ann2:"Fast delivery from Bolzano with OMEST Express Logistic",home:"Home",cats:"Categories",search:"Search",wish:"Wishlist",cart:"Cart",add:"Add to cart",added:"Added to cart",viewall:"View all",onreq:"Price on request",ask:"Request a quote",free:"You've unlocked free shipping! 🎉",left:"You're only <b>{x}</b> away from free shipping",sub:"Subtotal",disc:"Discount",total:"Total",checkout:"Checkout",code:"Discount code",apply:"Apply",empty:"Your cart is empty.",xs:"Complete your order",tax:"VAT included.",instock:"In stock",low:"Low stock",out:"Currently unavailable",ckT:"Cookies & privacy",ckP:"We use technical cookies and, with your consent, analytics and marketing cookies.",ckN:"Necessary only",ckY:"Accept all",sort:"Sort by",filters:"Filters",results:"{x} products",best:"Bestseller",top:"Top",pre:"Pre-order",req:"On request",last:"Last items",soldout:"Sold out",wishE:"Your wishlist is empty.",recent:"Recently viewed",soon:"Products coming soon",soonP:"This category is being prepared. Write to us – we'll help you find the right product.",deliv:"Delivery time",orig:"View on sportforyou.net",rm:"Remove",nores:"No products found."}
};
/* weitere Texte als [it, de, en] */
const X = {
  view:['Dettagli','Details ansehen','View details'], catNote:['Gli ordini online arriveranno presto – per ora chiedici direttamente.','Online-Bestellung folgt in Kürze – bis dahin einfach direkt anfragen.','Online ordering is coming soon – until then, just ask us directly.'],
  prev:['Indietro','Zurück','Back'], next:['Avanti','Weiter','Next'],
  tr1:['Spedizione in tutta Italia','Versand in ganz Italien','Shipping across Italy'], tr1s:['piccoli articoli gratis da 99 €','Kleinteile gratis ab 99 €','small items free over €99'],
  tr2:['Consegna rapida','Schnelle Lieferung','Fast delivery'], tr2s:['con OMEST Express Logistic','mit OMEST Express Logistic','with OMEST Express Logistic'],
  tr3:['Reso entro 14 giorni','14 Tage Rückgabe','14-day returns'], tr3s:['semplice e veloce','einfach & schnell','quick and easy'],
  tr4:['Su misura','Persönlich','Personal'], tr4s:['consulenza da esperti','Beratung vom Profi','expert advice'],
  shipX:['Spedizione in Italia: {x}','Versand nach Italien: {x}','Shipping within Italy: {x}'], shipSm:['gratuita da 99 €','gratis ab 99 €','free on orders over €99'], shipBulk:['merce voluminosa','Sperrgut','bulky goods'], shipFr:['Spedizione gratuita in Italia','Gratisversand in Italien','Free shipping within Italy'], wgt:['Peso','Gewicht','Weight'],
  shopsport:['Acquista per sport','Nach Sport einkaufen','Shop by sport'],
  kat:['Catalogo','Katalog','Catalogue'], katK:['Catalogo 2026','Katalog 2026','Catalogue 2026'], katH:['Tutto il nostro assortimento in un catalogo','Unser ganzes Sortiment in einem Katalog','Our full range in one catalogue'], katP:['Reti, pali, accessori per il campo, cura del campo e macchine lancia palle: 110 pagine da scaricare gratuitamente.','Netze, Pfosten, Platzzubehör, Platzpflege und Ballmaschinen: 110 Seiten zum kostenlosen Download.','Nets, posts, court accessories, court care and ball machines: 110 pages, free to download.'], katDl:['Scarica PDF','PDF herunterladen','Download PDF'], katView:['Sfoglia online','Online ansehen','View online'], katMeta:['PDF · 20 MB · in inglese','PDF · 20 MB · auf Englisch','PDF · 20 MB · in English'],
  hotD:['Racchette da tennis, padel e pickleball – le più richieste della stagione.','Tennis-, Padel- und Pickleballschläger – die Favoriten der Saison.','Tennis, padel and pickleball rackets – this season’s favourites.'],
  cpPadel:['Campo da padel','Padelplatz','Padel court'], cpTennis:['Campo da tennis','Tennisplatz','Tennis court'], cpPickle:['Campo da pickleball','Pickleballfeld','Pickleball court'],
  cpAcc:['Attrezzature e accessori campo','Platzausstattung & Zubehör','Court equipment & accessories'], cpSel:['Tipo di richiesta','Art der Anfrage','Request type'], onReq:['Richiedi offerta','Angebot anfragen','Request a quote'],
  cpPadelP:['Indoor o outdoor, con vetri e struttura','Indoor oder outdoor, mit Glas und Gestell','Indoor or outdoor, with glass and frame'], cpTennisP:['Terra rossa, sintetico o cemento','Sand, Kunstrasen oder Hartplatz','Clay, artificial grass or hard court'], cpPickleP:['Campi singoli o multicampo','Einzelfeld oder Mehrfeldanlage','Single court or multi-court facility'],
  b2bK:['B2B · Circoli · Comuni','B2B · Vereine · Gemeinden','B2B · Clubs · Municipalities'],
  cpK:['Campi su misura','Plätze nach Maß','Courts made to measure'],
  b2bH:['Il tuo campo, chiavi in mano','Dein kompletter Platz – schlüsselfertig','Your complete court, turnkey'],
  b2bP:['Campi completi da padel, tennis e pickleball per circoli, hotel e comuni – su richiesta, con consulenza e offerta personalizzata.','Komplette Padel-, Tennis- und Pickleballplätze für Vereine, Hotels und Gemeinden – auf Anfrage, mit Beratung und individuellem Angebot.','Complete padel, tennis and pickleball courts for clubs, hotels and municipalities – on request, with advice and a tailored quote.'],
  seeall:['Vedi tutto','Alles ansehen','See all'],
  dealsD:['Prezzi speciali finché le scorte durano.','Sonderpreise, solange der Vorrat reicht.','Special prices while stocks last.'],
  topsell:['Più venduti','Meistverkauft','Best sellers'], ourbest:['I nostri best seller','Unsere Bestseller','Our best sellers'],
  wbD:['Superfoods, integratori, pomate sportive e creme solari.','Superfoods, Nahrungsergänzung, Sportsalben und Sonnencreme.','Superfoods, supplements, sports balms and sunscreen.'],
  brandsH:['I nostri marchi','Unsere Marken','Our brands'], allBrands:['Tutti i marchi','Alle Marken','All brands'],
  nlH:['Iscriviti e ricevi il 10% di sconto','Anmelden und 10 % Rabatt sichern','Sign up and get 10% off'],
  nlP:['Novità, offerte esclusive e consigli dei nostri esperti. Niente spam, cancellazione in qualsiasi momento.','Neuheiten, exklusive Angebote und Tipps unserer Experten. Kein Spam, jederzeit abmeldbar.','New arrivals, exclusive offers and tips from our experts. No spam, unsubscribe anytime.'],
  email:['La tua e-mail','Deine E-Mail','Your email'], subscribe:['Iscriviti','Anmelden','Subscribe'],
  privacy:['Accetto l’informativa sulla privacy.','Ich akzeptiere die Datenschutzerklärung.','I accept the privacy policy.'],
  thanks:['✓ Grazie! (Demo)','✓ Danke! (Demo)','✓ Thank you! (Demo)'],
  locK:['Dove siamo','Standort','Find us'],
  revK:['Recensioni Google','Google-Bewertungen','Google reviews'], revH:['Cosa dicono i nostri clienti','Das sagen unsere Kunden','What our customers say'], revN:['{x} recensioni','{x} Bewertungen','{x} reviews'],
  revAll:['Tutte le recensioni su Google','Alle Bewertungen auf Google','All reviews on Google'], revW:['Scrivi una recensione','Bewertung schreiben','Write a review'],
  revPh:['Recensione Google','Google-Bewertung','Google review'], revPhT:['Qui appare una vera recensione dal profilo Google di SportForYou.','Hier erscheint eine echte Bewertung aus dem Google-Profil von SportForYou.','A real review from the SportForYou Google profile appears here.'], locH:['SportForYou a Bolzano','SportForYou in Bozen','SportForYou in Bolzano'],
  locA:['Via Enrico Fermi 5, 39100 Bolzano','Enrico-Fermi-Straße 5, 39100 Bozen','Via Enrico Fermi 5, 39100 Bolzano'],
  locV:['Visite previo appuntamento – chiamaci o scrivici su WhatsApp.','Besuch nach Terminvereinbarung – ruf uns an oder schreib uns auf WhatsApp.','Visits by appointment – call us or message us on WhatsApp.'],
  route:['Indicazioni stradali','Route planen','Directions'],
  mapP:['La mappa viene caricata solo dopo il tuo consenso (Google può impostare cookie).','Die Karte wird erst nach deiner Zustimmung geladen (Google kann Cookies setzen).','The map only loads after your consent (Google may set cookies).'],
  mapB:['Carica mappa','Karte laden','Load map'],
  all:['Tutto {x}','Alles in {x}','All {x}'],
  cat:['Categorie','Kategorien','Categories'], avail:['Disponibilità','Verfügbarkeit','Availability'], availY:['Solo disponibili','Nur verfügbare','In stock only'],
  price:['Prezzo','Preis','Price'], from:['Da €','Von €','From €'], to:['A €','Bis €','To €'], brand:['Marca','Marke','Brand'],
  sFeat:['In evidenza','Empfohlen','Featured'], sPa:['Prezzo crescente','Preis aufsteigend','Price: low to high'], sPd:['Prezzo decrescente','Preis absteigend','Price: high to low'], sAz:['A–Z','A–Z','A–Z'],
  sku:['Cod. art.','Art.-Nr.','SKU'],
  inqH:['Richiedi un’offerta personalizzata','Individuelles Angebot anfordern','Request a personalised quote'],
  name:['Nome','Name','Name'], inqT:['Misure, quantità, luogo…','Maße, Menge, Ort…','Dimensions, quantity, location…'],
  sendR:['Invia richiesta','Anfrage senden','Send request'], sentR:['✓ Richiesta inviata (Demo)','✓ Anfrage gesendet (Demo)','✓ Request sent (Demo)'],
  waQ:['Domanda su WhatsApp','Frage per WhatsApp','Ask on WhatsApp'], waQt:['Domanda su: ','Frage zu: ','Question about: '], waR:['Richiesta: ','Anfrage: ','Request: '],
  usp2:['Consegna con OMEST Express Logistic','Lieferung mit OMEST Express Logistic','Delivery with OMEST Express Logistic'], usp4:['Pagamento sicuro','Sichere Zahlung','Secure payment'],
  desc:['Descrizione','Beschreibung','Description'], readMore:['Leggi di più','Mehr lesen','Read more'], pdInfo:['Informazioni sul prodotto','Produktinformationen','Product information'], specs:['Dati tecnici','Technische Daten','Specifications'], shipret:['Spedizione e reso','Versand & Rückgabe','Shipping & returns'],
  shipTxt:['Spedizione con OMEST Express Logistic{x}. Reso entro 14 giorni.','Versand mit OMEST Express Logistic{x}. 14 Tage Rückgaberecht.','Shipped with OMEST Express Logistic{x}. 14-day returns.'],
  related:['Potrebbe piacerti anche','Das könnte dir auch gefallen','You may also like'],
  freeP:['Spedizione gratuita inclusa','Gratisversand inklusive','Free shipping included'], freeL:['Spedizione gratuita da 99 €','Gratisversand ab 99 €','Free shipping on orders over €99'],
  payS:['Pagamento sicuro con','Sicher bezahlen mit','Pay securely with'],
  pgAbout:['Chi siamo','Über uns','About us'], pgShipping:['Spedizione','Versand','Shipping'], pgContact:['Contatti','Kontakt','Contact'],
  pgImpressum:['Note legali','Impressum','Legal notice'], pgPrivacy:['Privacy','Datenschutz','Privacy'], pgTerms:['Condizioni di vendita','AGB','Terms of sale'], pgWithdrawal:['Modulo di recesso','Widerrufsformular','Withdrawal form'],
  pgAngebotP:['Circoli, hotel, comuni: descrivi il tuo progetto, ti rispondiamo il prima possibile.','Vereine, Hotels, Gemeinden: Beschreib dein Projekt – wir melden uns so schnell wie möglich.','Clubs, hotels, municipalities: describe your project and we’ll get back to you as soon as possible.'],
  pgContactP:['Scrivici – rispondiamo il prima possibile.','Schreib uns – wir antworten so schnell wie möglich.','Write to us – we’ll reply as soon as possible.'],
  pgWithdrawalP:['Compila il modulo per esercitare il diritto di recesso entro 14 giorni.','Mit diesem Formular kannst du deinen Kauf innerhalb von 14 Tagen widerrufen.','Use this form to withdraw from your purchase within 14 days.'],
  fullname:['Nome e cognome','Vor- und Nachname','Full name'], phone:['Telefono','Telefon','Phone'], club:['Circolo / azienda','Verein / Firma','Club / company'], courts:['Numero di campi','Anzahl Plätze','Number of courts'],
  order:['Numero ordine','Bestellnummer','Order number'],ordDate:['Data dell’ordine','Bestelldatum','Order date'],fcTitle:['Contatto diretto','Direkter Kontakt','Direct contact'],fcCall:['Chiamaci','Ruf uns an','Call us'],fcVisit:['Su appuntamento','Nach Terminvereinbarung','By appointment'],reqF:['Campi obbligatori','Pflichtfelder','Required fields'], fSport:['Sport','Sportart','Sport'], fType:['Tipo di prodotto','Produktart','Product type'], fVat:['P. IVA','MwSt.-Nr.','VAT No.'],fcProfile:['Profilo Google','Google-Profil','Google profile'], msg:['Messaggio','Nachricht','Message'], send:['Invia','Senden','Send'], sent:['✓ Inviato (Demo)','✓ Gesendet (Demo)','✓ Sent (Demo)'],
  pgNote:['Nella versione reale questo testo viene inserito in Shopify (Pagine / Policy).','In der echten Version wird dieser Text in Shopify gepflegt (Seiten / Richtlinien).','In the live version this text is managed in Shopify (Pages / Policies).'],
  q1:['Quale sport giochi?','Welchen Sport spielst du?','Which sport do you play?'], q2:['Il tuo livello?','Dein Niveau?','Your level?'], q3:['Il tuo stile di gioco?','Dein Spielstil?','Your playing style?'], q4:['Budget?','Budget?','Budget?'],
  l1:['Principiante','Einsteiger','Beginner'], l2:['Intermedio','Fortgeschritten','Intermediate'], l3:['Avanzato','Ambitioniert','Advanced'], l4:['Agonista','Turnierspieler','Competitive'],
  s1:['Controllo','Kontrolle','Control'], s2:['Potenza','Power','Power'], s3:['Versatile','Allround','All-round'], s4:['Non so','Weiß nicht','Not sure'],
  b1:['fino a 80 €','bis 80 €','up to €80'], b2:['80–150 €','80–150 €','€80–150'], b3:['150–250 €','150–250 €','€150–250'], b4:['oltre 250 €','über 250 €','over €250'],
  step:['Passo {x} di 4','Schritt {x} von 4','Step {x} of 4'], qdone:['Perfetto! 🎾','Perfekt! 🎾','Perfect! 🎾'], qdoneP:['Ecco i modelli adatti a te.','Hier sind die passenden Modelle für dich.','Here are the right models for you.'],
  qsee:['Vedi i consigli','Empfehlungen ansehen','See recommendations'], qre:['Ricomincia','Neu starten','Start over'],
  tryc:['Prova il codice <b>BENVENUTO10</b>','Probier den Code <b>WILLKOMMEN10</b>','Try the code <b>WELCOME10</b>'], badc:['Codice non valido.','Ungültiger Code.','Invalid code.'],
  ckout:['Qui si apre il checkout Shopify','Hier öffnet sich der Shopify-Checkout','The Shopify checkout opens here'], days14:['14 giorni','14 Tage','14 days'],
  fStreet:['Via Enrico Fermi 5','Enrico-Fermi-Straße 5','Via Enrico Fermi 5'], fAddr:['39100 Bolzano (BZ) – Italia','39100 Bozen (BZ) – Italien','39100 Bolzano (BZ) – Italia'], fQuote:['Richiedi un preventivo','Angebot anfragen','Request a quote'],
  h3K:['Court Royal · Universal Sport','Court Royal · Universal Sport','Court Royal · Universal Sport'], h3H:['Tutto per il tuo campo','Alles rund um den Platz','Everything for your court'], h3P:['Reti, pali, spazzole, spargisabbia, rulli e macchine – per circoli, hotel e comuni.','Netze, Pfosten, Schleppnetze, Sandstreuer, Walzen und Maschinen – für Vereine, Hotels und Gemeinden.','Nets, posts, drag nets, sand spreaders, rollers and machines – for clubs, hotels and municipalities.'], h3B:['Scopri gli accessori campo','Platzbedarf entdecken','Shop court equipment'],
  h7K:['Court Royal','Court Royal','Court Royal'], h7H:['Tutto per il campo da padel','Alles für den Padelplatz','Everything for the padel court'], h7P:['Reti, pali e accessori per campi da padel – qualità da torneo.','Netze, Pfosten und Zubehör für Padelplätze – in Turnierqualität.','Nets, posts and accessories for padel courts – tournament quality.'], h7B:['Scopri il padel','Padel entdecken','Shop padel'],
  h5K:['Sports Tutor · PLAYMATE','Sports Tutor · PLAYMATE','Sports Tutor · PLAYMATE'], h5H:['Macchine lancia palle','Ballmaschinen','Ball machines'], h5P:['Per allenamento, scuole tennis e circoli – tennis, padel e pickleball.','Für Training, Tennisschulen und Vereine – Tennis, Padel und Pickleball.','For training, tennis schools and clubs – tennis, padel and pickleball.'], h5B:['Scopri le macchine','Ballmaschinen entdecken','Shop ball machines'],
  h6K:['Court Royal','Court Royal','Court Royal'], h6H:['Reti da pickleball','Pickleball-Netze','Pickleball nets'], h6P:['Sistemi rete, pali e accessori per pickleball – per club e uso privato.','Netzsysteme, Pfosten und Zubehör für Pickleball – für Vereine und privat.','Net systems, posts and accessories for pickleball – for clubs and private use.'], h6B:['Scopri il pickleball','Pickleball entdecken','Shop pickleball'],
  fRights:['Tutti i diritti riservati','Alle Rechte vorbehalten','All rights reserved'],
  fLegal:['Informazioni legali','Rechtliches','Legal'], fCookie:['Impostazioni cookie','Cookie-Einstellungen','Cookie settings'], fChannels:['Social media','Social Media','Social media'], fAdrH:['Indirizzo','Adresse','Address'], pPrev:['Indietro','Zurück','Previous'], pNext:['Avanti','Weiter','Next'], pShow:['{a}–{b} di {n} prodotti','{a}–{b} von {n} Produkten','{a}–{b} of {n} products'], pPage:['Pagina','Seite','Page'], pPer:['Mostra','Anzeigen','Show'], pAll:['Tutti','Alle','All'], fClaim:['Il tuo specialista per attrezzature da campo a Bolzano – reti, pali, cura del campo e macchine lancia palle per tennis, padel, pickleball e badminton.','Dein Spezialist für Platzbedarf aus Bozen – Netze, Pfosten, Platzpflege und Ballmaschinen für Tennis, Padel, Pickleball und Badminton.','Your court equipment specialist in Bolzano – nets, posts, court care and ball machines for tennis, padel, pickleball and badminton.'],
  qph:['Cerca prodotti, marchi, codici…','Produkte, Marken, Art.-Nr. suchen…','Search products, brands, SKU…']
};
Object.entries(X).forEach(([k, v]) => ['it','de','en'].forEach((l, i) => L[l][k] = v[i]));
let lang = 'de';
const t = (k, x) => (L[lang][k] || L.it[k] || k).replace('{x}', x);
const eur = n => n.toLocaleString(lang === 'en' ? 'en-IE' : lang === 'de' ? 'de-DE' : 'it-IT', {style:'currency',currency:'EUR'});
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);

const ICO = {
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  ret:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12a8 8 0 1 0 3-6.2L4 8"/><path d="M4 4v4h4"/></svg>',
  store:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 9l2-5h14l2 5M4 9v11h16V9M3 9h18M9 20v-6h6v6"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-4.4-9.3-9A5.2 5.2 0 0 1 12 6a5.2 5.2 0 0 1 9.3 6c-2.3 4.6-9.3 9-9.3 9z"/></svg>'
};

/* ---------- Kategorien wie auf sportforyou.net ---------- */
const COL = {};
const MENU = [];
/* Kategorienamen DE / EN (IT steht in col()) */
const CT = {
  'tennis-racchette':['Schläger','Rackets'],'tennis-palle':['Bälle','Balls'],'tennis-corde':['Saiten','Strings'],'tennis-corde-mono':['Monofil','Monofilament'],'tennis-corde-multi':['Multifil','Multifilament'],'tennis-accessori':['Zubehör','Accessories'],
  'tennis-campo':['Platzbedarf','Court equipment'],'tennis-accordatrici':['Bespannmaschinen & Werkzeug','Stringing machines & tools'],
  'padel-racchette':['Schläger','Rackets'],'padel-palle':['Bälle','Balls'],'padel-accessori':['Zubehör','Accessories'],'padel-campo':['Platzbedarf','Court equipment'],
  'pickleball-racchette':['Schläger','Paddles'],'pickleball-palline':['Bälle','Balls'],'pickleball-campo':['Platzbedarf','Court equipment'],
  'badminton-campo':['Platzbedarf','Court equipment'],'badminton-accordatrici':['Bespannmaschinen & Werkzeug','Stringing machines & tools'],
  'pomate-sportive':['Sportsalben','Sports balms'],'integratori':['Nahrungsergänzung','Supplements'],'creme-solari':['Sonnenschutz','Sunscreen'],
  'tennis-campo-reti':['Tennisnetze','Tennis nets'],'padel-campo-reti':['Padelnetze','Padel nets'],'pickleball-campo-reti':['Pickleballnetze','Pickleball nets'],'badminton-campo-reti':['Badmintonnetze','Badminton nets'],
  pali:['Netzpfosten','Net posts'],'tennis-campo-spazzole':['Besen & Schleppnetze','Brushes & drag mats'],spazzole:['Besen','Brushes'],
  linee:['Linien & Zubehör','Lines & accessories'],macchine:['Ballmaschinen','Ball machines'],asciugatura:['Platztrocknung','Court drying'],
  irrigazione:['Platzbewässerung','Court irrigation'],panche:['Bänke & Schiedsrichterstühle','Benches & umpire chairs'],'spazzole-scarpe':['Schuhbürsten','Shoe brushes'],
  rulli:['Walzen & Fräsen','Rollers & tillers'],spazzatrice:['Motor-Kehrmaschine','Motorised sweeper'],defibrillatori:['Defibrillatoren','Defibrillators'],
  pavimentazione:['Bodenbelag','Flooring'],sedia:['Schiedsrichterstuhl','Umpire chair'],
  platz:['Alle Artikel','All products'],marchi:['Marken','Brands'],'offerte-top':['Top-Angebote','Top deals'],bestseller:['Bestseller','Best sellers']
};
const ctr = k => CT[k] || CT[k.split('-').slice(2).join('-')];
function col(k, it, cats, parent, img){
  COL[k] = {k, cats, parent, img, sub:[], get t(){ const x = lang !== 'it' && ctr(k); return x ? x[lang==='de'?0:1] : it; }}; if (parent) COL[parent].sub.push(k); else MENU.push(k); return COL[k]; }
const ci = path => D.catimg[path.replace(/\//g,'-')] || '';

col('tennis','Tennis',['it/tennis','it/tennis/accesori-campo']);
col('tennis-racchette','Racchette',['it/tennis/racchette'],'tennis',ci('it/tennis/racchette'));
col('tennis-palle','Palle',['it/tennis/palle'],'tennis',ci('it/tennis/palle'));
col('tennis-corde','Corde',['it/tennis/corde'],'tennis',ci('it/tennis/corde'));
col('tennis-corde-mono','Monofilamento',['it/tennis/corde/prospro/monofilamento'],'tennis-corde',ci('it/tennis/corde'));
col('tennis-corde-multi','Multifilamento',['it/tennis/corde/prospro/multifilamenti'],'tennis-corde',ci('it/tennis/corde'));
col('tennis-accessori','Accessori',['it/tennis/accessori'],'tennis',ci('it/tennis/accessori'));
col('tennis-campo','Accessori campo',['it/tennis/accessori-campo','it/tennis/accesori-campo'],'tennis',ci('it/tennis/accessori-campo'));
col('tennis-accordatrici','Macchine accordatrici e attrezzi',['it/tennis/machine-accordatrici-e-attrezzi'],'tennis',ci('it/tennis/machine-accordatrici-e-attrezzi'));
col('padel','Padel',['it/padel']);
col('padel-racchette','Racchette',['it/padel/racchette'],'padel',ci('it/padel/racchette'));
col('padel-palle','Palle',['it/padel/palle'],'padel',ci('it/padel/palle'));
col('padel-accessori','Accessori',['it/padel/accessori'],'padel',ci('it/padel/accessori'));
col('padel-campo','Accessori campo',['it/padel/accessori-campo','it/padel/accessor-campo','it/padel/reti-da-padel'],'padel',ci('it/padel/accessori-campo'));
col('pickleball','Pickleball',['it/pickleball']);
col('pickleball-racchette','Racchette',['it/pickleball/racchette'],'pickleball',ci('it/pickleball/racchette'));
col('pickleball-palline','Palline',['it/pickleball/palline'],'pickleball',ci('it/pickleball/palline'));
col('pickleball-campo','Accessori campo',['it/pickleball/accessori-campo'],'pickleball',ci('it/pickleball/accessori-campo'));
col('badminton','Badminton',['it/badminton']);
col('badminton-campo','Accessori campo',['it/badminton/accessori-campo'],'badminton',ci('accessori-campo'));
col('badminton-accordatrici','Macchine accordatrici e attrezzi',['it/badminton/macchine-accordatrici-e-attrezzi'],'badminton',ci('it/badminton/macchine-accordatrici-e-attrezzi'));
/* Platzbedarf als eigener Menüpunkt – Unterseiten = Sportarten */
const PLATZ_SP = ['tennis','padel','pickleball','badminton'];
col('platz','Tutti gli articoli',PLATZ_SP.flatMap(s=>COL[s+'-campo'].cats));
PLATZ_SP.forEach(s => col('platz-'+s, COL[s].t, COL[s+'-campo'].cats, 'platz', COL[s+'-campo'].img));
COL.platz.hidden = true; // nicht im Header – Seite bleibt über Links erreichbar
/* Accessori campo – Unterkategorien wie auf sportforyou.net */
const sub3 = (parent, list) => list.forEach(([k, t, path]) => col(parent+'-'+k, t, [path], parent, ci(path)));
sub3('tennis-campo', [
  ['reti','Reti da Tennis','it/tennis/accessori-campo/reti-da-tennis'],
  ['pali','Pali per reti','it/tennis/accessori-campo/pali-per-rete-da-tennis'],
  ['spazzole','Spazzole e reti livellatrici','it/tennis/accessori-campo/spazzole-e-reti-livellatrici'],
  ['linee','Linee e accessori','it/tennis/accesori-campo/linee-da-tennis-e-accessori'],
  ['macchine','Macchine lancia palle','it/tennis/accessori-campo/macchine-lancia-palle'],
  ['asciugatura','Asciugatura del campo','it/tennis/accessori-campo/asciugatura-del-campo'],
  ['irrigazione','Irrigazione del campo','it/tennis/accessori-campo/irrigazione-del-campo'],
  ['panche','Panche e seggioloni arbitrali','it/tennis/accessori-campo/panche-e-seggioloni-arbitrali'],
  ['spazzole-scarpe','Spazzole per scarpe','it/tennis/accessori-campo/spazzole-per-scarpe-da-tennis'],
  ['rulli','Rulli & Frese','it/tennis/accessori-campo/rulli-frese'],
  ['spazzatrice','Spazzatrice motorizzata','it/tennis/accessori-campo/spazzatrice-motorizzata'],
  ['defibrillatori','Defibrillatori','it/tennis/accessori-campo/defibrillatori']]);
sub3('padel-campo', [
  ['reti','Reti da Padel','it/padel/reti-da-padel'],
  ['pali','Pali per reti','it/padel/accessor-campo/pali-per-reti-da-padel'],
  ['spazzole','Spazzole','it/padel/accessori-campo/spazzole'],
  ['macchine','Macchine lancia palle','it/padel/accessori-campo/macchine-lancia-palle'],
  ['defibrillatori','Defibrillatori','it/padel/accessori-campo/defibrillatori']]);
sub3('pickleball-campo', [
  ['reti','Reti da Pickleball','it/pickleball/accessori-campo/reti-da-pickleball'],
  ['pali','Pali per reti','it/pickleball/accessori-campo/pali-per-reti-da-pickleball'],
  ['macchine','Macchine lancia palline','it/pickleball/accessori-campo/macchine-lancia-palle'],
  ['pavimentazione','Pavimentazione','it/pickleball/accessori-campo/pavimentazione'],
  ['defibrillatori','Defibrillatori','it/pickleball/accessori-campo/defibrillatori']]);
sub3('badminton-campo', [
  ['reti','Reti da Badminton','it/badminton/accessori-campo/reti-da-badminton'],
  ['pali','Pali per reti','it/badminton/accessori-campo/pali-per-reti-da-badminton'],
  ['sedia','Sedia per arbitro','it/badminton/accessori-campo/sedia-per-arbitro']]);
const anc = c => { const a = []; while (c) { a.unshift(c); c = COL[c.parent]; } return a; };

/* nicht im Hauptmenü – über Startseite erreichbar */
col('marchi','Marchi',[]).hidden = true;
col('offerte-top','Offerte top',['it/offerte-top']).hidden = true;
col('bestseller','Bestseller',['it/bestseller']).hidden = true;
col('hot-rackets','Hot Rackets',['it/tennis/racchette','it/padel/racchette','it/pickleball/racchette'],null).hidden = true;

const BRANDS_ALL = [
  ['Court Royal','184/md/court-royal_1','court-royal_1'],['Universal Sport','183/md/universal-sport_1','universal-sport_1'],
  ['Slazenger','156/md/slazenger_1','slazenger_1'],['Carlton','167/md/carlton_1'],['Slinger','157/md/slinger_1'],
  ['PLAYMATE','187/md/playmate_1','playmate_1'],['Sports Tutor','186/md/sports-tutor_1','sports-tutor_1'],
  ['Acerbis','178/md/acerbis_1','acerbis_1'],['XVST','179/md/xvst_1','xvst_1'],['FD Dolomites','177/md/fd-dolomites_1','fd-dolomites_1'],
  ['AlpsKura','181/md/it-alpskura','it/alpskura'],['SportForYou FIT','176/md/sportforyou-fit_1','sportforyou-fit_1']
];
const BRANDS = BRANDS_ALL.filter(([n]) => D.prods.some(p => p.v === n));
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
BRANDS.forEach(([n, logo, path]) => { const c = col('brand-'+slug(n), n, path ? [path] : [], 'marchi', `${SITE}/media/image/manufacturer/${logo}.webp`); c.vendor = n; c.logo = c.img; });

const byH = h => P.find(p => p.h === h);
const catMatch = (p, cats) => p.c.some(c => cats.some(k => c === k || c.startsWith(k + '/')));
const inC = k => { const c = COL[k]; if (!c) return []; return P.filter(p => catMatch(p, c.cats) || (c.vendor && p.v === c.vendor)); };
/* leere Unterkategorien (z. B. nach dem Entfernen einer Marke) nicht in Menüs zeigen */
Object.values(COL).forEach(c => { if (c.k !== 'marchi') c.sub = c.sub.filter(s => inC(s).length); });
/* Nur Platzbedarf: Sport-Menü zeigt direkt Netze, Pfosten … */
PLATZ_SP.forEach(sp => { const c = COL[sp+'-campo']; COL[sp].sub = c.sub.slice(); c.sub.forEach(x => COL[x].parent = sp); c.hidden = true; });
MENU.splice(0, MENU.length, ...MENU.filter(k => COL[k].hidden || inC(k).length));
const homeList = name => (D.home[name] || []).map(byH).filter(Boolean);
/* tiefste passende Kategorie eines Produkts (für Breadcrumb & „Ähnliche“) */
function colOf(p){
  let best = null;
  for (const k in COL){ const c = COL[k]; if (c.hidden || c.vendor || !c.cats.length || ['offerte-top','bestseller'].includes(k)) continue; if (catMatch(p, c.cats) && (!best || c.parent)) best = c; }
  return best;
}

/* ---------- Kategorie-Icons fürs Mega-Menü ---------- */
const CI = {
  racket:'<g transform="translate(24 24) scale(1.18) rotate(-35) translate(-24 -24)"><ellipse cx="24" cy="15" rx="9" ry="12"/><path d="M19 7.2v15.6M24 4.5v21M29 7.2v15.6M17.8 9h12.4M16.5 15h15M17.8 21h12.4" stroke-width="1" opacity=".7"/><path d="M18 24l4.3 9M30 24l-4.3 9M22.3 33h3.4"/><path d="M24 33.5v10.5" stroke-width="4.5"/></g>',
  ball:'<circle cx="24" cy="24" r="15"/><path d="M12 14.5c5 3 8 6.5 8 9.5s-3 6.5-8 9.5M36 14.5c-5 3-8 6.5-8 9.5s3 6.5 8 9.5"/>',
  string:'<circle cx="22" cy="22" r="14"/><circle cx="22" cy="22" r="9"/><circle cx="22" cy="22" r="4"/><path d="M36 22c4 6 5 13 3 20"/>',
  grip:'<rect x="18" y="5" width="12" height="36" rx="3"/><path d="M18 14l12-5M18 21l12-5M18 28l12-5M18 35l12-5" stroke-width="1.6"/><path d="M15 43h18"/>',
  tape:'<ellipse cx="24" cy="13" rx="18" ry="7"/><path d="M6 13v22c0 3.9 8 7 18 7s18-3.1 18-7V13"/><g stroke-width="1.4"><circle cx="15" cy="12" r="2.6"/><circle cx="21.5" cy="10" r="2.6"/><circle cx="28" cy="10" r="2.6"/><circle cx="34" cy="12.5" r="2.6"/><circle cx="18.5" cy="16" r="2.6"/><circle cx="25" cy="15.5" r="2.6"/><circle cx="31" cy="16.5" r="2.6"/></g><g stroke-width="1.1" opacity=".6"><circle cx="10.5" cy="22.5" r="2.7"/><circle cx="17" cy="23.6" r="2.7"/><circle cx="24" cy="24" r="2.7"/><circle cx="31" cy="23.6" r="2.7"/><circle cx="37.5" cy="22.5" r="2.7"/></g><path d="M6 28c0 3.9 8 7 18 7s18-3.1 18-7" stroke-width="1.8"/><path d="M14 35.5l4 1M30 36.5l4-1" stroke-width="1.4" opacity=".6"/>',
  net:'<path d="M6 10v30M42 10v30" stroke-width="3"/><path d="M6 13h36" stroke-width="2.6"/><path d="M6 20h36M6 27h36M12 13v20M18 13v20M24 13v20M30 13v20M36 13v20M6 33h36" stroke-width="1.1" opacity=".7"/><path d="M3 41h42"/>',
  machine:'<ellipse cx="24" cy="14" rx="9" ry="8"/><path d="M19 9v10M24 6v16M29 9v10M15.5 12h17M15 16h18" stroke-width="1.1" opacity=".7"/><ellipse cx="24" cy="27" rx="17" ry="4.5"/><path d="M24 31.5V41M12 42h24M14 25.5 17 22M34 25.5 31 22"/>',
  padel:'<g transform="translate(24 24) scale(1.08) rotate(-35) translate(-24 -24)"><path d="M24 3c7.5 0 12 5.5 12 12.5 0 6-2.5 10.5-6 13.5l-3 4h-6l-3-4c-3.5-3-6-7.5-6-13.5C12 8.5 16.5 3 24 3z"/><path d="M24 25.5l-2.4 4.3h4.8z" stroke-width="1.6"/><g fill="currentColor" stroke="none"><circle cx="20" cy="9" r="1.2"/><circle cx="24" cy="8" r="1.2"/><circle cx="28" cy="9" r="1.2"/><circle cx="18" cy="13.5" r="1.2"/><circle cx="22" cy="13" r="1.2"/><circle cx="26" cy="13" r="1.2"/><circle cx="30" cy="13.5" r="1.2"/><circle cx="18.5" cy="18" r="1.2"/><circle cx="22" cy="17.5" r="1.2"/><circle cx="26" cy="17.5" r="1.2"/><circle cx="29.5" cy="18" r="1.2"/><circle cx="21" cy="22" r="1.2"/><circle cx="27" cy="22" r="1.2"/></g><path d="M24 33.5v9" stroke-width="5"/><path d="M24 44.5c-2.5 2.5-6 2.5-8 .5" stroke-width="1.3"/></g>',
  tube:'<rect x="16" y="3" width="16" height="42" rx="8"/><circle cx="24" cy="12" r="5"/><circle cx="24" cy="24" r="5"/><circle cx="24" cy="36" r="5"/>',
  paddle:'<rect x="8" y="5" width="20" height="24" rx="8" transform="rotate(-45 18 17)"/><path d="M27 26l11 11" stroke-width="5"/><circle cx="39" cy="10" r="4"/>',
  wiffle:'<circle cx="24" cy="24" r="15"/><g fill="currentColor" stroke="none"><circle cx="24" cy="15" r="2"/><circle cx="16" cy="21" r="2"/><circle cx="32" cy="21" r="2"/><circle cx="24" cy="25" r="2"/><circle cx="18" cy="31" r="2"/><circle cx="30" cy="31" r="2"/></g>',
  shuttle:'<circle cx="24" cy="39" r="5"/><path d="M19.5 36 12 7h24l-7.5 29"/><path d="M18 7l3.5 29M24 7v29M30 7l-3.5 29M14 16h20M16 26h16" stroke-width="1.1" opacity=".7"/>',
  leaf:'<path d="M9 39C9 21 21 10 40 8c-2 19-13 31-31 31z"/><path d="M9 39 29 19M17 31h7M22 26v-6" stroke-width="1.6"/>',
  cream:'<path d="M14 6h20l-3 31H17z"/><rect x="19" y="37" width="10" height="6" rx="1.5"/><path d="M17 15h14M18 22h12" stroke-width="1.6"/>',
  pill:'<rect x="7" y="17" width="34" height="14" rx="7" transform="rotate(-40 24 24)"/><path d="M19.5 18.6l9 10.8"/>',
  sun:'<circle cx="24" cy="24" r="8"/><path d="M24 5v6M24 37v6M5 24h6M37 24h6M10.6 10.6l4.2 4.2M33.2 33.2l4.2 4.2M10.6 37.4l4.2-4.2M33.2 14.8l4.2-4.2"/>'
};
const CICON = {platz:'net','platz-tennis':'racket','platz-padel':'padel','platz-pickleball':'paddle','platz-badminton':'shuttle',tennis:'racket',padel:'padel',pickleball:'paddle',badminton:'shuttle',wellbeing:'leaf','tennis-racchette':'racket','tennis-palle':'ball','tennis-corde':'string','tennis-corde-mono':'string','tennis-corde-multi':'string','tennis-accessori':'tape','tennis-campo':'net','tennis-accordatrici':'machine',
  'padel-racchette':'padel','padel-palle':'ball','padel-accessori':'tape','padel-campo':'net',
  'pickleball-racchette':'paddle','pickleball-palline':'wiffle','pickleball-campo':'net',
  'badminton-campo':'net','badminton-accordatrici':'machine',
  'superfoods':'leaf','pomate-sportive':'cream','integratori':'pill','creme-solari':'sun'};
/* Produkt-Icons aus echten Produktfotos (Umriss als Maske) */
const PICO = window.SFY_ICO || {};
const catIcon = k => PICO[k] ? `<i class="pico" style="--m:url(${PICO[k]})" aria-hidden="true"></i>` : CICON[k] ? `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${CI[CICON[k]]}</svg>` : '';

/* ---------- Speicher ---------- */
const store = {get(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let cart = store.get('sfy-demo:cart', []).filter(l => byH(l.h));
let wish = store.get('sfy:wishlist', []);
let recent = store.get('sfy:recent', []);
let discount = store.get('sfy-demo:disc', null);

/* ---------- Produkt-Status ---------- */
const isOut = p => /non disponibile/.test(p.st);
const isLow = p => /scarsa/.test(p.st);
const SHOP = false; // Katalog-Modus: kein Warenkorb/Kauf – Bestellungen später über Shopify
const canBuy = p => SHOP && p.p != null && !isOut(p);
const md = u => (u || '').replace('/lg/', '/md/');
const FIT = window.SFY_FIT || {};
const fit = u => { const f = FIT[u]; return f ? ` style="--z:${f[0]};--tx:${f[1]}%;--ty:${f[2]}%"` : ''; };
const sm = u => (u || '').replace('/lg/', '/sm/');

/* ---------- Bausteine ---------- */
function badges(p){
  const b = [];
  if (p.rib.includes('Top')) b.push(`<span class="badge badge--top">${t('top')}</span>`);
  if (p.rib.includes('I più venduti')) b.push(`<span class="badge">${t('best')}</span>`);
  if (p.rib.includes('Preordina')) b.push(`<span class="badge badge--new">${t('pre')}</span>`);
  if (p.rib.includes('su richiesta')) b.push(`<span class="badge badge--info">${t('req')}</span>`);
  if (isOut(p)) b.push(`<span class="badge badge--sale">${t('soldout')}</span>`);
  else if (isLow(p)) b.push(`<span class="badge badge--low">${t('last')}</span>`);
  return b.join('');
}
function card(p){
  const alt = p.gal && p.gal[1] ? `<img class="alt" src="${md(p.gal[1])}"${fit(p.gal[1])} alt="" loading="lazy">` : '';
  const price = p.p == null ? `<span class="onreq">${t('onreq')}</span>` : `<span>${eur(p.p)}</span>`;
  const btn = !SHOP ? `<a class="btn btn--ghost" href="#/p/${p.h}">${t('view')}</a>`
    : p.p == null ? `<a class="btn btn--ghost" href="#/p/${p.h}">${t('ask')}</a>`
    : isOut(p) ? `<button class="btn" disabled>${t('soldout')}</button>`
    : `<button class="btn" onclick="add('${p.h}')">${t('add')}</button>`;
  return `<article class="card">
    <a class="card__media" href="#/p/${p.h}" aria-label="${esc(p.t)}"><img src="${p.img}"${fit(p.img)} alt="${esc((p.v?p.v+" ":"")+p.t)}" loading="lazy">${alt}</a>
    <div class="badges">${badges(p)}</div>
    <button class="wish ${wish.includes(p.h)?'on':''}" data-wish="${p.h}" aria-label="${t('wish')}">${ICO.heart}</button>
    <div class="card__body"><span class="vendor">${esc(p.v)}</span><a class="card__title" href="#/p/${p.h}">${esc(p.t)}</a><div class="price">${price}</div>${cardStock(p)}${btn}</div>
  </article>`;
}
const cardStock = p => p.p == null ? '' : isOut(p) ? '' : isLow(p) ? `<span class="cst low">● ${t('low')}</span>` : p.st ? `<span class="cst">✓ ${t('instock')}</span>` : '';
function rail(title, items, link, desc, bg){
  if (!items.length) return '';
  return `<section class="sec ${bg||''}"><div class="wrap"><div class="sec__head"><div><h2>${title}</h2>${desc?`<p style="margin:6px 0 0;color:var(--muted)">${desc}</p>`:''}</div>${link?`<a href="#/c/${link}">${t('viewall')} →</a>`:''}</div><div class="rail">${items.map(card).join('')}</div></div></section>`;
}
const ptile = (img, k, label) => `<a class="ptile" href="#/c/${k}" aria-label="${label}"><img src="${OPC}${img}.webp" alt="${label}" loading="lazy"></a>`;

/* ---------- Startseite: Überblick zuerst, dann Kaufanreize ---------- */
const MOS = {
  campo: ['court-royal-tn-200','court-royal-wimbledon','supporti-per-rete-singola-wimbledon','tappeto-livellatore-in-pe-rigido-court-royal','usp10'],
  padel: ['court-royal-pn-8','court-royal-pn9','court-royal-pp73_1','court-royal-pp73-con-piastra_1'],
  macch: ['tennis-tutor-pro','playmate-volley-dream','padel-tutor-plus','pickleball-tutor-mini'],
  pickle: ['court-royal-sistema-rete-professionale','court-royal-pn5','court-royal-pn7','court-royal-pp73']
};
const pimgH = h => (D.prods.find(p=>p.h===h)||{}).img || '';
/* Slides: Foto (f), Original-Banner (b) oder Produkt-Mosaik (m) */
const HERO = [
  {m:'campo', to:'tennis', k:'h3'},
  {m:'padel', to:'padel', k:'h7'},
  {m:'macch', to:'tennis-campo-macchine', k:'h5'},
  {m:'pickle', to:'pickleball', k:'h6'}
];
function heroSlide(s, i){
  const lazy = i ? 'loading="lazy"' : '';
  if (s.b) return `<a class="bh__s ${i?'':'on'}" href="#/c/${s.to}"><img src="${SITE}/media/image/opc/xl/Titelseite%20Banner/${s.b}.webp" alt="${s.alt}"></a>`;
  const txt = `<div class="bh__txt"><span class="kicker">${t(s.k+'K')}</span><h2>${t(s.k+'H')}</h2><p>${t(s.k+'P')}</p><span class="btn btn--lime">${t(s.k+'B')} →</span></div>`;
  const pic = s.f ? `<div class="bh__pic"><img src="${s.f}" alt="" style="object-position:${s.pos}" ${lazy}></div>`
    : `<div class="bh__mos${MOS[s.m].length===4?' bh__mos--4':''}">${MOS[s.m].map(h=>`<span><img src="${Array.isArray(h)?h[1]:pimgH(h).replace('/md/','/lg/')}" alt="" ${lazy}></span>`).join('')}</div>`;
  return `<a class="bh__s bh__x ${s.m?'bh__x--m':''} ${i?'':'on'}" href="#/c/${s.to}">${txt}${pic}</a>`;
}
function sportCards(){
  return MENU.filter(k=>!COL[k].hidden && k!=='platz').map(k => {
    const m = COL[k], subs = m.sub.map(s=>[s,inC(s).length]).filter(x=>x[1]);
    return `<div class="sport" style="--bg:url('bilder/sport-${k}.jpg');--pos:${({tennis:'78% 30%',wellbeing:'30% center'})[k]||'center'}"><a class="sport__h" href="#/c/${k}"><span class="mega__img">${catIcon(k)}</span><span><h3>${m.t}</h3><small>${t('results',inC(k).length)}</small></span></a>
      <ul>${subs.map(([s,n])=>`<li><a href="#/c/${s}">${COL[s].t}<small>${n}</small></a></li>`).join('')}</ul>
      <a class="btn btn--ghost" href="#/c/${k}">${t('viewall')} →</a></div>`;
  }).join('');
}
const shipLine = p => p.sh == null ? '' : p.sh === 0 ? t('shipFr') : t('shipX', eur(p.sh) + ' – ' + (p.sh < 20 ? t('shipSm') : t('shipBulk')));
const kgFmt = n => n.toLocaleString(lang === 'en' ? 'en-IE' : lang === 'de' ? 'de-DE' : 'it-IT', {maximumFractionDigits: 2}) + ' kg';
const KAT = 'katalog/SportForYou-Katalog-2026.pdf';
function home(){
  return `
  <section class="bh" id="hero">
    <div class="bh__track">${HERO.map(heroSlide).join('')}</div>
    <div class="dots">${HERO.map((_,i)=>`<button class="${i?'':'on'}" data-dot="${i}" aria-label="Slide ${i+1}"></button>`).join('')}</div>
  </section>
  <section class="mint"><div class="wrap trust">
    <div>${ICO.truck}<span><strong>${t('tr1')}</strong><small>${t('tr1s')}</small></span></div>
    <div>${ICO.clock}<span><strong>${t('tr2')}</strong><small>${t('tr2s')}</small></span></div>
    <div>${ICO.ret}<span><strong>${t('tr3')}</strong><small>${t('tr3s')}</small></span></div>
    <div>${ICO.store}<span><strong>${t('tr4')}</strong><small>${t('tr4s')}</small></span></div>
  </div></section>
  ${rail(COL['offerte-top'].t, homeList('Offerte top'), 'offerte-top', t('dealsD'), '')}
  <section class="sec mint"><div class="wrap"><div class="sec__head"><h2>${t('shopsport')}</h2></div><div class="sports">${sportCards()}</div></div></section>
  <section class="sec dark courts">
    <div class="wrap courts__in">
      <div class="courts__txt">
        <span class="courts__k">${t('cpK')}</span>
        <h2>${t('b2bH')}</h2>
        <p class="courts__lead">${t('b2bP')}</p>
        <ul class="courts__list">${[['cpPadel','cpPadelP'],['cpTennis','cpTennisP'],['cpPickle','cpPickleP']].map(([l,d])=>`<li><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg><div><b>${t(l)}</b><span>${t(d)}</span></div></li>`).join('')}</ul>
        <a class="btn btn--lime courts__cta" href="#/page/angebot" onclick="qType='padel'">${t('onReq')} →</a>
      </div>
      <div class="courts__mo">${[['padel','cpPadel'],['tennis','cpTennis'],['pickleball','cpPickle']].map(([k,l])=>`<figure class="courts__im courts__im--${k}"><img src="bilder/platz-${k}.jpg" alt="${t(l)}" loading="lazy"><figcaption>${t(l)}</figcaption></figure>`).join('')}</div>
    </div>
  </section>
  <section class="sec sec--tight"><div class="wrap"><div class="sec__head"><h2>${t('brandsH')}</h2><a href="#/c/marchi">${t('viewall')} →</a></div>
    <div class="brands"><div class="brandlogos">${(()=>{const b=BRANDS.map(([n])=>{const c=COL['brand-'+slug(n)];return `<a href="#/c/${c.k}" title="${esc(n)}"><img src="${c.logo}" alt="${esc(n)}" loading="lazy"></a>`}).join('');return b+b})()}</div></div>
  </div></section>
  <section class="sec"><div class="wrap kat"><a class="kat__cover" href="${KAT}" target="_blank" rel="noopener"><img src="bilder/katalog-cover.jpg" alt="${t('katK')}" loading="lazy"></a><div class="kat__txt"><span class="kicker">${t('katK')}</span><h2>${t('katH')}</h2><p>${t('katP')}</p><div class="kat__btns"><a class="btn" href="${KAT}" download>${t('katDl')}</a><a class="btn btn--ghost" href="${KAT}" target="_blank" rel="noopener">${t('katView')}</a></div><small>${t('katMeta')}</small></div></div></section>
  ${SHOP?'':'<!--'}<section class="sec dark"><div class="wrap nl">
    <div class="nl__big">-10%</div>
    <div><h2 style="font-size:clamp(28px,3.6vw,40px)">${t('nlH')}</h2><p style="margin:0;opacity:.85">${t('nlP')}</p></div>
    <form onsubmit="event.preventDefault();toast(t('thanks'));this.reset()"><input type="email" required placeholder="${t('email')}"><button class="btn btn--lime">${t('subscribe')}</button><label><input type="checkbox" required> ${t('privacy')}</label></form>
  </div></section>${SHOP?'':'-->'}
  <section class="sec mint"><div class="wrap loc">
    <div class="rev">${revBlock()}</div>
    <div class="map" id="map"><svg class="bg" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="6"><path d="M0 80h400M0 200h400M120 0v300M280 0v300M0 0l400 300"/></svg><strong>Google Maps</strong><p style="margin:0;max-width:320px;font-size:14px">${t('mapP')}</p><button class="btn" onclick="loadMap()">${t('mapB')}</button></div>
  </div></section>`;
}

/* ---------- Kategorieseite ---------- */
const searchP = q => { const s = q.toLowerCase(); return P.filter(p => (p.t+' '+p.v+' '+p.sku).toLowerCase().includes(s)); };
/* Platzbedarf: Filter nach Sportart und Produktart (Netze, Pfosten …) */
const inPlatz = k => COL[k] && anc(COL[k])[0].k === 'platz';
const platzTypes = p => [...new Set(PLATZ_SP.flatMap(s => COL[s+'-campo'].sub.filter(x => catMatch(p, COL[x].cats)).map(x => x.slice(s.length+7))))];
const PTN = {reti:['Reti','Netze','Nets'],pali:['Pali per reti','Netzpfosten','Net posts'],spazzole:['Spazzole e reti livellatrici','Besen & Schleppnetze','Brushes & drag mats'],
  linee:['Linee e accessori','Linien & Zubehör','Lines & accessories'],macchine:['Macchine lancia palle','Ballmaschinen','Ball machines'],asciugatura:['Asciugatura','Platztrocknung','Court drying'],
  irrigazione:['Irrigazione','Platzbewässerung','Court irrigation'],panche:['Panche e seggioloni','Bänke & Schiedsrichterstühle','Benches & umpire chairs'],sedia:['Sedia per arbitro','Schiedsrichterstuhl','Umpire chair'],
  'spazzole-scarpe':['Spazzole per scarpe','Schuhbürsten','Shoe brushes'],rulli:['Rulli & frese','Walzen & Fräsen','Rollers & tillers'],spazzatrice:['Spazzatrice motorizzata','Motor-Kehrmaschine','Motorised sweeper'],
  defibrillatori:['Defibrillatori','Defibrillatoren','Defibrillators'],pavimentazione:['Pavimentazione','Bodenbelag','Flooring']};
/* Reihenfolge „Empfohlen“: erst die eigentliche Platzausstattung, Defibrillatoren zuletzt */
const PT_ORD = ['reti','pali','pavimentazione','linee','spazzole','rulli','asciugatura','irrigazione','spazzatrice','macchine','panche','sedia','spazzole-scarpe','defibrillatori'];
const LI = () => ({it:0,de:1,en:2})[lang];
function platzF(k, items){
  if (!inPlatz(k)) return '';
  const sp = k === 'platz' ? PLATZ_SP.filter(s => items.some(p => catMatch(p, COL[s+'-campo'].cats))) : [];
  const cnt = {}; items.forEach(p => platzTypes(p).forEach(x => cnt[x] = (cnt[x]||0) + 1));
  const ty = Object.keys(cnt).sort((a,b) => cnt[b]-cnt[a]);
  return (sp.length > 1 ? `<details open><summary>${t('fSport')}</summary>${sp.map(s=>`<label><input type="checkbox" data-f="sp" value="${s}"> ${COL[s].t}</label>`).join('')}</details>` : '')
    + (ty.length > 1 ? `<details open><summary>${t('fType')}</summary>${ty.map(x=>`<label><input type="checkbox" data-f="ty" value="${x}"> ${(PTN[x]||[x,x,x])[LI()]} <small style="opacity:.6">${cnt[x]}</small></label>`).join('')}</details>` : '');
}
function collection(k, query){
  const c = COL[k];
  if (query == null && !c) return `<div class="wrap page-sec"><h1>404</h1></div>`;
  if (k === 'marchi') return brandsPage();
  const items = query != null ? searchP(query) : inC(k);
  const title = query != null ? `“${esc(query)}”` : c.t;
  const par = c && c.parent ? COL[c.parent] : c;
  const cp = c && (c.sub.length ? c : COL[c.parent]);
  const chips = cp && cp.sub.length && cp.k !== 'marchi'
    ? `<div class="chipbar"><a class="chip ${cp.k===k?'on':''}" href="#/c/${cp.k}">${t('all',cp.t)}</a>${cp.sub.map(s=>[s,inC(s).length]).filter(x=>x[1]).map(([s,n])=>`<a class="chip ${s===k?'on':''}" href="#/c/${s}">${COL[s].t} <small style="opacity:.6">${n}</small></a>`).join('')}</div>` : '';
  const root = c && !c.vendor && !c.hidden ? anc(c)[0] : null;
  const path = c ? anc(c).map(a=>a.k) : [];
  const tree = (n, d) => n.sub.map(s=>[s,inC(s).length]).filter(x=>x[1]).map(([s,cnt]) => `<li><a class="${s===k?'on':''}" href="#/c/${s}">${COL[s].t}<small>${cnt}</small></a>${path.includes(s) && COL[s].sub.length ? `<ul>${tree(COL[s], d+1)}</ul>` : ''}</li>`).join('');
  const catnav = root ? `<details open><summary>${t('cat')}</summary><ul class="catnav"><li><a class="${root.k===k?'on':''}" href="#/c/${root.k}"><b>${t('all',root.t)}</b><small>${inC(root.k).length}</small></a></li>${tree(root, 0)}</ul></details>` : '';
  const vendors = [...new Set(items.map(p=>p.v).filter(Boolean))].sort();
  const himg = c && c.vendor && (items.find(p=>p.img)?.img || c.img);
  const cico = c && !c.vendor && (catIcon(k) || anc(c).map(a=>catIcon(a.k)).reverse().find(Boolean));
  const head = cico ? `<div class="cat-head"><span class="cat-head__ico">${cico}</span><div><h1 style="margin:0">${title}</h1><p style="margin:8px 0 0;color:var(--muted)">${t('results',items.length)}</p></div></div>`
    : himg ? `<div class="cat-head"><span class="cat-head__img"><img src="${md(himg)}" alt=""${fit(himg)}></span><div><h1 style="margin:0">${title}</h1><p style="margin:8px 0 0;color:var(--muted)">${t('results',items.length)}</p></div></div>`
    : `<h1 style="margin:0">${title}</h1><p style="margin:8px 0 0;color:var(--muted)">${t('results',items.length)}</p>`;
  const crumbs = `<a href="#/">${t('home')}</a> / ${c ? anc(c).slice(0,-1).map(a=>`<a href="#/c/${a.k}">${a.t}</a> / `).join('') : ''}${title}`;
  if (!items.length && query == null) return `<div class="wrap"><div class="crumbs">${crumbs}</div></div>
    <section class="coll-hero mint" style="padding:32px 0"><div class="wrap">${head}</div></section>
    <div class="wrap page-sec" style="text-align:center;max-width:640px">${chips}<h2>${t('soon')}</h2><p style="color:var(--muted)">${t('soonP')}</p>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><a class="btn btn--wa" href="https://wa.me/393762188628?text=${encodeURIComponent('Info: '+c.t)}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn--ghost" style="color:var(--green)" href="#/">Shop</a></div></div>`;
  return `<div class="wrap"><div class="crumbs">${crumbs}</div></div>
  <section class="coll-hero mint" style="padding:32px 0"><div class="wrap">${head}</div></section>
  <div class="wrap" style="padding-top:20px">${chips}
    <div class="coll">
      <aside class="filters" id="filters">
        ${catnav}
        <details open><summary>${t('avail')}</summary><label><input type="checkbox" data-f="avail"> ${t('availY')}</label></details>
        <details open><summary>${t('price')}</summary><div class="range"><input type="number" placeholder="${t('from')}" data-f="min"><input type="number" placeholder="${t('to')}" data-f="max"></div></details>
        ${platzF(k, items)}
        ${vendors.length>1?`<details open><summary>${t('brand')}</summary>${vendors.map(v=>`<label><input type="checkbox" data-f="v" value="${esc(v)}"> ${esc(v)}</label>`).join('')}</details>`:''}
      </aside>
      <div>
        <div class="toolbar"><span class="pinfo" id="pinfo"></span><button class="btn btn--ghost fbtn" style="min-height:42px;color:var(--green)" onclick="document.getElementById('filters').classList.toggle('open')">${t('filters')}</button>
          <label style="font-size:14px;display:flex;gap:8px;align-items:center">${t('sort')} <select id="sort"><option value="feat">${t('sFeat')}</option><option value="pa">${t('sPa')}</option><option value="pd">${t('sPd')}</option><option value="az">${t('sAz')}</option></select></label>
          <label style="font-size:14px;display:flex;gap:8px;align-items:center">${t('pPer')} <select id="per">${PER_OPTS.map(n=>`<option value="${n}" ${n===PER?'selected':''}>${n||t('pAll')}</option>`).join('')}</select></label></div>
        <div class="grid" id="cgrid"></div>
        <nav class="pager" id="pager" aria-label="${t('pPage')}"></nav>
      </div>
    </div></div>`;
}
/* Seitenweise: Standard 9 Produkte (3×3 am Desktop), Besucher wählt oben rechts 9/18/36/Alle; Seite pro Kategorie gemerkt */
const PER_OPTS = [9, 18, 36, 0], PG = {};
let PER = store.get('sfy-demo:per', 9);
function pager(pg, pages){
  const nums = [...new Set([1, pg-1, pg, pg+1, pages])].filter(n => n >= 1 && n <= pages).sort((a,b)=>a-b);
  let out = '', last = 0;
  for (const n of nums){ if (n - last > 1) out += '<span class="pager__gap">…</span>'; out += n === pg ? `<span class="pager__n on" aria-current="page">${n}</span>` : `<button class="pager__n" onclick="goPage(${n})" aria-label="${t('pPage')} ${n}">${n}</button>`; last = n; }
  const arrow = (n, cls, label, d) => `<button class="pager__arr ${cls}" onclick="goPage(${n})" ${n<1||n>pages?'disabled':''}>${cls==='prev'?`<svg viewBox="0 0 24 24"><path d="${d}"/></svg><span>${label}</span>`:`<span>${label}</span><svg viewBox="0 0 24 24"><path d="${d}"/></svg>`}</button>`;
  return arrow(pg-1, 'prev', t('pPrev'), 'm15 6-6 6 6 6') + `<div class="pager__nums">${out}</div>` + arrow(pg+1, 'next', t('pNext'), 'm9 6 6 6-6 6');
}
function bindCollection(k, query){
  const grid = document.getElementById('cgrid'); if (!grid) return;
  const key = query != null ? 'q:' + query : k;
  const base = query != null ? searchP(query) : inC(k);
  const run = () => {
    const vs = [...document.querySelectorAll('[data-f="v"]:checked')].map(i=>i.value);
    const min = +document.querySelector('[data-f=min]').value || 0, max = +document.querySelector('[data-f=max]').value || Infinity;
    const avail = document.querySelector('[data-f=avail]').checked;
    const sp = [...document.querySelectorAll('[data-f="sp"]:checked')].map(i=>i.value), ty = [...document.querySelectorAll('[data-f="ty"]:checked')].map(i=>i.value);
    let r = base.filter(p => (!avail || !isOut(p)) && (p.p == null || (p.p >= min && p.p <= max)) && (!vs.length || vs.includes(p.v))
      && (!sp.length || sp.some(x => catMatch(p, COL[x+'-campo'].cats))) && (!ty.length || platzTypes(p).some(x => ty.includes(x))));
    const s = document.getElementById('sort').value, pv = p => p.p ?? Infinity;
    const sk = COL[k] ? COL[k].sub.filter(x=>x.indexOf('brand-')) : [];
    if (s==='feat' && sk.length){ const gi = p => { const i = sk.findIndex(x=>catMatch(p, COL[x].cats)); return i < 0 ? 99 : i; }; r = r.map((p,i)=>[p,i]).sort((a,b)=>gi(a[0])-gi(b[0])||a[1]-b[1]).map(x=>x[0]); }
    if (s==='feat' && inPlatz(k)){ const gi = p => Math.min(...platzTypes(p).map(x => PT_ORD.indexOf(x)).filter(i => i > -1), 98); r = r.map((p,i)=>[p,i]).sort((a,b)=>gi(a[0])-gi(b[0])||a[1]-b[1]).map(x=>x[0]); }
    if (s==='pa') r.sort((a,b)=>pv(a)-pv(b)); if (s==='pd') r.sort((a,b)=>(b.p??-1)-(a.p??-1)); if (s==='az') r.sort((a,b)=>a.t.localeCompare(b.t));
    const per = PER || r.length || 1, pages = Math.max(1, Math.ceil(r.length / per)), pg = Math.min(PG[key] || 1, pages); PG[key] = pg;
    const a = (pg-1)*per;
    grid.innerHTML = r.length ? r.slice(a, a+per).map(card).join('') : `<p class="empty" style="grid-column:1/-1">${t('nores')}</p>`;
    document.getElementById('pinfo').textContent = r.length ? t('pShow').replace('{a}', a+1).replace('{b}', Math.min(a+per, r.length)).replace('{n}', r.length) : '';
    document.getElementById('pager').innerHTML = pages < 2 ? '' : pager(pg, pages);
    syncWish();
  };
  window.goPage = n => { PG[key] = n; run(); document.getElementById('cgrid').closest('.coll').scrollIntoView({behavior:'smooth', block:'start'}); };
  document.getElementById('per').addEventListener('input', e => { PER = +e.target.value; store.set('sfy-demo:per', PER); });
  document.querySelectorAll('[data-f],#sort,#per').forEach(el=>el.addEventListener('input',()=>{ PG[key] = 1; run(); }));
  run();
}
function brandsPage(){
  return `<div class="wrap"><div class="crumbs"><a href="#/">${t('home')}</a> / ${COL.marchi.t}</div></div>
  <section class="coll-hero mint" style="padding:32px 0"><div class="wrap"><h1 style="margin:0">${t('brandsH')}</h1></div></section>
  <div class="wrap page-sec"><div class="mega__brands" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">${COL.marchi.sub.map(k=>`<a href="#/c/${k}" title="${esc(COL[k].t)}"><img src="${COL[k].logo}" alt="${esc(COL[k].t)}" loading="lazy"></a>`).join('')}</div></div>`;
}

/* ---------- Produktseite ---------- */
function product(h){
  const p = byH(h); if (!p) return `<div class="wrap page-sec"><h1>404</h1></div>`;
  recent = [h, ...recent.filter(x=>x!==h)].slice(0,12); store.set('sfy:recent', recent);
  const c = colOf(p);
  const related = (c ? inC(c.k) : []).filter(x => x.h !== h).slice(0,10);
  const gal = p.gal && p.gal.length ? p.gal : [p.img];
  const txt = h => (h||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  const sdOk = txt(p.sd).length > 30;
  const pshort = sdOk ? p.sd : p.ds;
  const pdesc = (sdOk && !(p.ds && p.ds.replace(/<[^>]+>/g,'').includes(p.sd.replace(/<[^>]+>/g,'').trim().slice(0,60))) ? p.sd : '') + (p.ds||'');
  const stock = isOut(p) ? `<div class="stock out"><i></i>${t('out')}</div>` : isLow(p) ? `<div class="stock low"><i></i>${t('low')}</div>` : p.st ? `<div class="stock"><i></i>${t('instock')}</div>` : '';
  const deliv = p.dl && !/^0\s/.test(p.dl) ? `<p class="src" style="margin:4px 0 0">${t('deliv')}: ${esc(p.dl)}</p>` : '';
  const vars = (p.va||[]).map(([n, vals], i) => `<label style="display:block;font-weight:700;margin-top:14px">${esc(n)}</label><select class="sel" data-var="${i}">${vals.map(v=>`<option>${esc(v)}</option>`).join('')}</select>`).join('');
  const buy = (!SHOP || p.p == null)
    ? `<div class="inquiry">${SHOP?`<strong>${t('inqH')}</strong><input placeholder="${t('name')}"><input type="email" placeholder="E-mail"><textarea rows="3" placeholder="${t('inqT')}"></textarea><button class="btn" onclick="toast(t('sentR'))">${t('sendR')}</button>`:`<strong>${t('inqH')}</strong><p style="margin:0">${t('catNote')}</p>`}<div style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn btn--wa" style="flex:1" href="https://wa.me/393762188628?text=${encodeURIComponent(t('waR')+((p.v?p.v+' ':'')+p.t))}" target="_blank" rel="noopener">WhatsApp</a><a class="btn btn--ghost" style="flex:1;color:var(--green)" href="mailto:info@sportforyou.net?subject=${encodeURIComponent((p.v?p.v+' ':'')+p.t)}">E-mail</a></div></div>`
    : `<div class="qtyrow"><div class="qty"><button onclick="q(-1)">−</button><input id="qty" value="1" inputmode="numeric"><button onclick="q(1)">+</button></div><button class="btn btn--lime" id="mainAdd" ${isOut(p)?'disabled':''} onclick="add('${p.h}',+document.getElementById('qty').value||1,selVar())">${isOut(p)?t('soldout'):t('add')}</button></div><p class="freehint">${ICO.truck} ${p.p>=FREE?t('freeP'):t('freeL')}</p>`;
  return `<div class="wrap"><div class="crumbs"><a href="#/">${t('home')}</a> / ${c?anc(c).map(a=>`<a href="#/c/${a.k}">${a.t}</a> / `).join(''):''}${esc(p.t)}</div>
  <div class="pdp">
    <div><div class="gal__main" id="gmain" onclick="this.classList.toggle('zoom')"><img id="gimg" src="${gal[0]}" alt="${esc((p.v?p.v+" ":"")+p.t)}"><div class="badges">${badges(p)}</div></div>
      ${gal.length>1?`<div class="gal__thumbs">${gal.map((g,i)=>`<button class="${i?'':'on'}" onclick="[...this.parentNode.children].forEach(b=>b.classList.remove('on'));this.classList.add('on');document.getElementById('gimg').src='${g}'"><img src="${sm(g)}" alt="" loading="lazy"></button>`).join('')}</div>`:''}</div>
    <div class="pinfo">
      <span class="vendor">${esc(p.v)}</span><h1>${esc(p.t)}</h1>
      ${p.sku?`<p class="src" style="margin:0 0 8px">${t('sku')} ${esc(p.sku)}</p>`:''}
      ${p.p == null ? `<div class="price onreq" style="font-size:24px">${t('onreq')}</div>` : `<div class="price">${eur(p.p)}</div><div class="tax">${t('tax')}${shipLine(p)?` · <span class="shipl">${shipLine(p)}</span>`:''}</div>`}
      ${stock}${deliv}
      ${pshort?`<div class="rte pshort">${pshort}</div><a class="pmore" href="javascript:void 0" onclick="document.getElementById('pdet').scrollIntoView({behavior:'smooth'})">${t('readMore')} ↓</a>`:''}
      ${vars}
      ${buy}
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px"><button class="btn btn--ghost wish-inline" style="color:var(--green);flex:1" data-wish="${p.h}">${ICO.heart.replace('<svg','<svg width="18" height="18"')} ${t('wish')}</button><a class="btn btn--wa" style="flex:1" href="https://wa.me/393762188628?text=${encodeURIComponent(t('waQt')+((p.v?p.v+' ':'')+p.t))}" target="_blank" rel="noopener">${t('waQ')}</a></div>
      <ul class="usp"><li>${ICO.truck} ${shipLine(p) || t('tr1')+' – '+t('tr1s')}</li><li>${ICO.clock} ${t('usp2')}</li><li>${ICO.ret} ${t('tr3')}</li><li>${ICO.shield} ${t('usp4')}</li></ul>
    </div>
  </div>
  <section class="pdet" id="pdet">
    <h2>${t('pdInfo')}</h2>
    <div class="pdet__grid">
      ${pdesc?`<div class="pdet__box"><h3>${t('desc')}</h3><div class="rte">${pdesc}</div></div>`:''}
      <div class="pdet__side">
        ${p.at&&p.at.length?`<div class="pdet__box"><h3>${t('specs')}</h3><table class="spec">${p.at.map(r=>`<tr><td>${esc(r[0])}</td><td>${esc(r[1])}</td></tr>`).join('')}</table></div>`:''}
        <div class="pdet__box"><h3>${t('shipret')}</h3><p>${t('shipTxt', deliv ? ` – ${t('deliv')}: ${esc(p.dl)}` : '')}</p><ul class="usp" style="margin:12px 0 0;background:none;padding:0"><li>${ICO.truck} ${shipLine(p) || t('tr1')+' – '+t('tr1s')}</li>${p.kg && p.kgv ? `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 8h12l2 12H4z"/><circle cx="12" cy="5.5" r="2.5"/></svg> ${t('wgt')}: ca. ${kgFmt(p.kg)}</li>` : ''}<li>${ICO.ret} ${t('tr3')}</li><li>${ICO.shield} ${t('usp4')}</li></ul></div>
      </div>
    </div>
  </section></div>
  ${related.length?`<section class="sec mint"><div class="wrap"><div class="sec__head"><h2>${t('related')}</h2>${c?`<a href="#/c/${c.k}">${t('viewall')} →</a>`:''}</div><div class="rail">${related.map(card).join('')}</div></div></section>`:''}`;
}
const selVar = () => [...document.querySelectorAll('[data-var]')].map(s=>s.value).join(' / ');

function wishlist(){
  const items = wish.map(byH).filter(Boolean);
  return `<div class="wrap page-sec"><h1>${t('wish')}</h1>${items.length?`<div class="grid grid--4">${items.map(card).join('')}</div>`:`<p class="empty">${t('wishE')}</p><p style="text-align:center"><a class="btn" href="#/">Shop</a></p>`}</div>`;
}
function page(h){
  if (['angebot','contact','withdrawal'].includes(h)){
    setTimeout(()=>{ qType='acc'; });
    const T = {angebot:[t('fQuote'),t('pgAngebotP')],contact:[t('pgContact'),t('pgContactP')],withdrawal:[t('pgWithdrawal'),t('pgWithdrawalP')]}[h];
    const F=(l,inp,w,req)=>`<label class="ff${w?' ff--w':''}"><span>${l}${req?' <b>*</b>':''}</span>${inp}</label>`;
    const ic=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
    return `<div class="wrap page-sec fpage"><div class="fpage__head"><h1>${T[0]}</h1><p>${T[1]}</p></div>
    <div class="fpage__grid">
    <form class="fform" onsubmit="event.preventDefault();mailForm(this,'${T[0].replace(/'/g,'')}')">
      ${F(t('fullname'),`<input required autocomplete="name">`,0,1)}${F('E-Mail',`<input required type="email" autocomplete="email">`,0,1)}
      ${F(t('phone'),`<input type="tel" autocomplete="tel">`)}
      ${h==='angebot'?F(t('cpSel'),`<select>${[['acc','cpAcc'],['padel','cpPadel'],['tennis','cpTennis'],['pickleball','cpPickle']].map(([k,l])=>`<option ${qType===k?'selected':''}>${t(l)}</option>`).join('')}</select>`)+F(t('club'),`<input autocomplete="organization">`)+F(t('courts'),`<input type="number" min="1" inputmode="numeric">`):''}
      ${h==='withdrawal'?F(t('order'),`<input required>`,0,1)+F(t('ordDate'),`<input type="date">`):''}
      ${h==='contact'?'<span></span>':''}
      ${F(t('msg'),`<textarea rows="6"></textarea>`,1)}
      <label class="fchk"><input type="checkbox" required><span>${t('privacy')} <b style="color:var(--sale)">*</b></span></label>
      <button class="btn">${t('send')}</button></form>
    <aside class="fside"><h3>${t('fcTitle')}</h3>
      <div class="fside__it">${ic('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>')}<div><small>${t('fcCall')}</small><a href="tel:+390471347209">+39 0471 347209</a></div></div>
      <div class="fside__it">${ic('<path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z"/>')}<div><small>WhatsApp</small><a href="https://wa.me/393762188628" target="_blank" rel="noopener">+39 376 218 8628</a></div></div>
      <div class="fside__it">${ic('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>')}<div><small>E-Mail</small><a href="mailto:info@sportforyou.net">info@sportforyou.net</a></div></div>
      <div class="fside__it">${ic('<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>')}<div><small>${t('fcVisit')}</small>${t('fStreet')}<br>${t('fAddr')}</div></div>
    </aside>
    <div class="map fmap" id="fmap"><svg class="bg" viewBox="0 0 400 300" fill="none" stroke="currentColor" stroke-width="6"><path d="M0 80h400M0 200h400M120 0v300M280 0v300M0 0l400 300"/></svg><strong>Google Maps</strong><p style="margin:0;font-size:14px">${t('mapP')}</p><button class="btn" onclick="loadMap('fmap')">${t('mapB')}</button><a href="${GMAPS}" target="_blank" rel="noopener" style="font-size:14px;color:var(--green)">${t('fcProfile')} ↗</a></div>
    </div></div>`;
  }
  return `<div class="wrap page-sec" style="max-width:760px"><h1>${L.it['pg'+h[0].toUpperCase()+h.slice(1)] ? t('pg'+h[0].toUpperCase()+h.slice(1)) : esc(h)}</h1>
  ${h==='impressum'?`<p><strong>SportForYou Srls</strong><br>${t('fStreet')}, ${t('fAddr')}<br>${t('fVat')} IT03275830218 · REA BZ-246529<br>info@sportforyou.net</p>`:''}
  <p style="color:var(--muted)">${t('pgNote')}</p></div>`;
}

let qType = 'acc';

/* ---------- Google-Bewertungen ---------- */
// Echte Rezensionen von Google hier eintragen: {n:'Name', s:5, d:'vor 2 Monaten', x:'Text'} – nichts erfinden
const REV = [];
const REV_SUM = null; // z. B. {r:4.9, n:37}
const GMAPS = 'https://www.google.com/maps/search/?api=1&query=SportForYou%2C%20Via%20Enrico%20Fermi%205%2C%2039100%20Bolzano';
const GLOGO = '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#4285F4" d="M45 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8a10 10 0 0 1-4.4 6.6v5.5h7.1c4.2-3.8 6.5-9.5 6.5-16.1z"/><path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.6-3.9-12.3-9.1H4.3v5.7A22 22 0 0 0 24 46z"/><path fill="#FBBC05" d="M11.7 28.1a13.2 13.2 0 0 1 0-8.2v-5.7H4.3a22 22 0 0 0 0 19.6z"/><path fill="#EA4335" d="M24 10.8c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3A22 22 0 0 0 4.3 14.2l7.4 5.7c1.7-5.2 6.6-9.1 12.3-9.1z"/></svg>';
const stars = n => `<span class="rev__st" aria-label="${n}/5">${'★'.repeat(Math.round(n))}${'☆'.repeat(5-Math.round(n))}</span>`;
function revBlock(){
  const list = REV.length ? REV : [1,2,3].map(()=>({n:t('revPh'), d:'Google', s:5, x:t('revPhT'), ph:1}));
  const cards = list.map((r,i)=>`<figure class="rev__c${r.ph?' rev__ph':''}${i?'':' on'}"><div class="rev__top"><span class="rev__av">${r.ph?'?':esc(r.n[0])}</span><div><strong>${esc(r.n)}</strong><small>${esc(r.d||'')}</small></div>${stars(r.s)}</div><blockquote>${esc(r.x)}</blockquote></figure>`).join('');
  return `<div class="rev__head">${GLOGO}<div><span class="kicker">${t('revK')}</span><h2>${t('revH')}</h2>${REV_SUM?`<p>${stars(REV_SUM.r)} <b>${String(REV_SUM.r).replace('.',',')}</b> · ${t('revN',REV_SUM.n)}</p>`:''}</div></div>
    <div class="rev__sl" id="revsl">${cards}<div class="rev__nav">${list.length>1?`<button aria-label="${t('pPrev')}" onclick="revGo(-1)">‹</button><span>${list.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</span><button aria-label="${t('pNext')}" onclick="revGo(1)">›</button>`:''}</div></div>
    <div class="rev__btns"><a class="btn" href="${GMAPS}" target="_blank" rel="noopener">${t('revAll')}</a><a class="btn btn--ghost" style="color:var(--green)" href="${GMAPS}" target="_blank" rel="noopener">${t('revW')}</a></div>`;
}
let revI = 0, revT;
function revGo(d){
  const el = document.getElementById('revsl'); if (!el) return clearInterval(revT);
  const cs = el.querySelectorAll('.rev__c'), ds = el.querySelectorAll('.rev__nav i');
  revI = (revI + d + cs.length) % cs.length;
  cs.forEach((c,i)=>c.classList.toggle('on', i===revI)); ds.forEach((c,i)=>c.classList.toggle('on', i===revI));
  if (d) { clearInterval(revT); revT = setInterval(()=>revGo(1), 7000); }
}

/* ---------- Warenkorb ---------- */
const lineKey = l => l.h + '|' + (l.v||'');
const sub = () => cart.reduce((s,l)=>s + (byH(l.h).p||0)*l.q, 0);
const discAmt = () => discount ? Math.round(sub()*discount.pct)/100 : 0;
function add(h, n=1, v=''){ if (!SHOP) return;
  const p = byH(h); if (!p || !canBuy(p)) return;
  if (!v && p.va && p.va.length) v = p.va.map(x=>x[1][0]).join(' / ');
  const l = cart.find(x=>x.h===h && (x.v||'')===v); l ? l.q+=n : cart.push({h,q:n,v});
  saveCart(); openCart(); toast('✓ '+t('added'));
}
function setQ(key, q){ cart = q<=0 ? cart.filter(l=>lineKey(l)!==key) : cart.map(l=>lineKey(l)===key?{...l,q}:l); saveCart(); }
function saveCart(){ store.set('sfy-demo:cart', cart); renderCart(); counts(); }
function renderCart(){
  const s = sub(), d = discAmt(), left = Math.max(0, FREE - (s - d));
  document.getElementById('ship').innerHTML = (left ? t('left', eur(left)) : `<b>${t('free')}</b>`) + `<div class="bar ${left?'':'full'}"><i style="width:${Math.min(100,(s-d)/FREE*100)}%"></i></div>`;
  const items = document.getElementById('items');
  if (!cart.length){ items.innerHTML = `<p class="empty">${t('empty')}</p>`; document.getElementById('foot').innerHTML = `<a class="btn btn--block" href="#/" onclick="closeCart()">Shop</a>`; return; }
  const xs = P.filter(p => canBuy(p) && !p.va?.length && !cart.some(l=>l.h===p.h) && p.p < 30 && /grip|overgrip|palle|palline/i.test(p.c.join(' '))).slice(0,6);
  items.innerHTML = cart.map(l=>{ const p=byH(l.h), k=esc(lineKey(l)).replace(/'/g,'&#39;'); return `<div class="line"><a class="line__img" href="#/p/${p.h}" onclick="closeCart()"><img src="${p.img}" alt=""></a><div><div class="t">${esc(p.t)}</div>${l.v?`<small style="color:var(--muted)">${esc(l.v)}</small>`:''}<div class="qty"><button onclick="setQ('${k}',${l.q-1})">−</button><input value="${l.q}" onchange="setQ('${k}',+this.value)"><button onclick="setQ('${k}',${l.q+1})">+</button></div></div><div style="text-align:right"><strong>${eur(p.p*l.q)}</strong><br><button class="rm" onclick="setQ('${k}',0)">${t('rm')}</button></div></div>`; }).join('')
    + (xs.length?`<div class="xsell"><h4>${t('xs')}</h4><div class="xsell__row">${xs.map(p=>`<div class="xs"><div class="line__img"><img src="${p.img}" alt="" loading="lazy"></div><span>${esc(p.t)}</span><strong>${eur(p.p)}</strong><button onclick="add('${p.h}')">+ ${t('cart')}</button></div>`).join('')}</div></div>`:'');
  document.getElementById('foot').innerHTML = `
    <form class="disc" onsubmit="event.preventDefault();applyCode(this.code.value)"><input name="code" placeholder="${t('code')}" value="${discount?discount.code:''}"><button>${t('apply')}</button></form>
    <div class="msg" id="dmsg">${discount?`<span class="ok">✓ ${discount.code} (−${discount.pct}%) · <a href="#" onclick="discount=null;store.set('sfy-demo:disc',null);renderCart();return false">${t('rm')}</a></span>`:`<span style="color:var(--muted)">${t('tryc')}</span>`}</div>
    <div class="sum"><span>${t('sub')}</span><span>${eur(s)}</span></div>
    ${d?`<div class="sum" style="color:#1d7a3a"><span>${t('disc')}</span><span>−${eur(d)}</span></div>`:''}
    <div class="sum total"><span>${t('total')}</span><span>${eur(s-d)}</span></div>
    <button class="btn btn--lime btn--block" onclick="toast(t('ckout'))">${t('checkout')}</button>
    <div class="trustline"><span>🔒 SSL</span><span>↩ ${t('days14')}</span><span>🚚 OMEST</span></div>`;
}
function applyCode(c){
  c = (c||'').trim().toUpperCase();
  if (['BENVENUTO10','WELCOME10','WILLKOMMEN10'].includes(c)){ discount = {code:c, pct:10}; store.set('sfy-demo:disc', discount); renderCart(); }
  else document.getElementById('dmsg').innerHTML = `<span class="err">${t('badc')}</span>`;
}
function mailForm(f, subj){
  const body=[...f.querySelectorAll('label.ff')].map(l=>{const i=l.querySelector('input,select,textarea'); return i&&i.type!=='checkbox'&&i.value?l.querySelector('span').textContent.replace('*','').trim()+': '+i.value:'';}).filter(Boolean).join('\n');
  location.href='mailto:info@sportforyou.net?subject='+encodeURIComponent('SportForYou – '+subj)+'&body='+encodeURIComponent(body);
}
function openCart(){ if (!SHOP) return; renderCart(); document.getElementById('cart').classList.add('open'); document.body.style.overflow='hidden'; }
function closeCart(){ document.getElementById('cart').classList.remove('open'); document.body.style.overflow=''; }
function counts(){
  const n = cart.reduce((s,l)=>s+l.q,0);
  document.querySelectorAll('[data-cc]').forEach(e=>{ if (e.dataset.n!==undefined && +e.dataset.n!==n){ e.classList.remove('bump'); void e.offsetWidth; e.classList.add('bump'); } e.textContent=n||''; e.dataset.n=n; });
  document.querySelectorAll('[data-wc]').forEach(e=>{e.textContent=wish.length||'';e.dataset.n=wish.length});
}
function q(d){ const i=document.getElementById('qty'); i.value=Math.max(1,(+i.value||1)+d); }

/* ---------- Diverses ---------- */
function toast(m){ const e=document.getElementById('toast'); e.textContent=m; e.classList.add('on'); clearTimeout(e._t); e._t=setTimeout(()=>e.classList.remove('on'),2200); }
function toggleM(o){ document.getElementById('mnav').classList.toggle('open',o); }
function toggleSearch(){ const s=document.getElementById('search'); s.classList.toggle('open'); if (s.classList.contains('open')) document.getElementById('q').focus(); }
function cookie(o){ document.getElementById('cookie').classList.toggle('on',o); if(!o) store.set('sfy-demo:cookie',1); }
function loadMap(id){ document.getElementById(id||'map').innerHTML = '<iframe loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=SportForYou%2C%20Via%20Enrico%20Fermi%205%2C%2039100%20Bolzano&output=embed"></iframe>'; }

function buildNav(){
  const LOGO = document.querySelector('.hdr .logo').innerHTML;
  document.getElementById('nav').innerHTML = MENU.filter(k=>!COL[k].hidden).map(k => {
    const m = COL[k];
    let mega = '';
    if (k === 'marchi') mega = `<div class="mega"><div class="wrap mega__brands">${m.sub.map(s=>`<a href="#/c/${s}" title="${esc(COL[s].t)}"><img src="${COL[s].logo}" alt="${esc(COL[s].t)}" loading="lazy"></a>`).join('')}</div></div>`;
    else if (m.sub.length){
      const n = m.sub.length, cols = n <= 2 ? n : (n === 3 || n === 4) ? 2 : 3;
      mega = `<div class="mega"><div class="wrap mega__in"><div class="mega__grid${n===3?' mega__grid--col':''}" style="--c:${cols}">${m.sub.map(s=>`<a href="#/c/${s}"><span class="mega__img">${catIcon(s)}</span>${COL[s].t}</a>`).join('')}</div><a class="mega__promo" href="#/c/${k}" style="background-image:linear-gradient(to top,rgba(4,30,20,.9),rgba(4,30,20,.1) 65%),url('bilder/menu-${k}.jpg')"><span class="kicker" style="color:var(--lime);opacity:1">${m.t}</span><h4>${t('all',m.t)} →</h4><small style="opacity:.8">${t('results',inC(k).length)}</small></a></div></div>`;
    }
    return `<div><a href="#/c/${k}" class="${k==='offerte-top'?'sale':''}">${m.t}</a>${mega}</div>`;
  }).join('') + `<div><a href="${KAT}" target="_blank" rel="noopener">${t('kat')}</a></div>`;
  document.getElementById('mnavp').innerHTML = `<a class="logo" href="#/" onclick="toggleM(false);goHome(event)">${LOGO}</a><div style="height:16px"></div>` + MENU.filter(k=>!COL[k].hidden).map(k => { const m = COL[k]; return m.sub.length ? `<details><summary>${m.t}</summary><a href="#/c/${k}" onclick="toggleM(false)"><b>${k==='marchi'?t('allBrands'):t('all',m.t)}</b></a>${m.sub.map(s=>`<a href="#/c/${s}" onclick="toggleM(false)">${COL[s].t}</a>`).join('')}</details>` : `<details><summary style="${k==='offerte-top'?'color:var(--sale)':''}" onclick="location.hash='#/c/${k}';toggleM(false)">${m.t}</summary></details>`; }).join('') + `<details><summary onclick="window.open('${KAT}','_blank');toggleM(false)">${t('kat')} (PDF)</summary></details>`
    + `<div style="margin-top:20px;display:flex;gap:8px">${['de','it','en'].map(l=>`<button class="lang" style="display:inline-block" onclick="setLang('${l}')">${l.toUpperCase()}</button>`).join('')}</div><p style="font-size:14px;margin-top:20px">📞 <a href="tel:+390471347209">+39 0471 347209</a><br>💬 <a href="https://wa.me/393762188628">WhatsApp</a></p>`;
  document.getElementById('fshop').innerHTML = MENU.filter(k=>!COL[k].hidden).map(k=>`<li><a href="#/c/${k}">${COL[k].t}</a></li>`).join('')+`<li><a href="${KAT}" target="_blank" rel="noopener">${t('kat')} (PDF)</a></li>`;
}
const chunk = (a,n) => a.reduce((r,x,i)=>(i%n?r[r.length-1].push(x):r.push([x]),r),[]);

let heroT;
function hero(){
  clearInterval(heroT);
  const sl = [...document.querySelectorAll('.bh__s')], dots = [...document.querySelectorAll('[data-dot]')];
  if (!sl.length) return;
  let i = 0;
  const go = n => { i=(n+sl.length)%sl.length; sl.forEach((s,k)=>s.classList.toggle('on',k===i)); dots.forEach((d,k)=>d.classList.toggle('on',k===i)); };
  const restart = () => { clearInterval(heroT); heroT = setInterval(()=>go(i+1),6000); };
  dots.forEach(d=>d.onclick=()=>{ go(+d.dataset.dot); restart(); });
  go(+(new URLSearchParams(location.search).get('slide') || 0));
  document.querySelectorAll('[data-hn]').forEach(b=>b.onclick=()=>{ go(i + +b.dataset.hn); restart(); });
  restart();
}

function i18n(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i]').forEach(e=>e.textContent=t(e.dataset.i));
  document.getElementById('q').placeholder = t('qph');
  document.querySelectorAll('[data-ih]').forEach(e=>e.innerHTML=t(e.dataset.ih));
}
function setLang(l){ lang=l; document.getElementById('lang').value=l; store.set('sfy-demo:lang2',l); i18n(); buildNav(); route(); renderCart(); }

/* Effekte wie im Shopify-Theme (sfy.js): Einblenden beim Scrollen */
const FX_SEL = '.sec__head,.sports>.sport,.trust>div,.rail>*,.grid>.card,.courts__it,.rev,.loc>*,.nl>*,.coll-hero,.pdet__box,.fform,.fside';
const FX_OK = !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window;
const fxIO = FX_OK && new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target; el.classList.add('is-in'); fxIO.unobserve(el);
  setTimeout(() => el.classList.remove('rv','is-in'), 800 + (parseInt(el.style.getPropertyValue('--fx-d'))||0));
}), {rootMargin:'0px 0px -8% 0px', threshold:.12});
function fx(root){
  if (!FX_OK) return;
  root.querySelectorAll(FX_SEL).forEach(el => {
    if (el.dataset.fx) return; el.dataset.fx = 1;
    const sib = [...el.parentElement.children].filter(c => c.matches(FX_SEL));
    el.style.setProperty('--fx-d', Math.min(sib.indexOf(el), 6)*70 + 'ms');
    el.classList.add('rv'); fxIO.observe(el);
  });
}
function route(){
  const [, a, b] = (location.hash.replace(/^#\/?/, '/') || '/').split('/');
  const app = document.getElementById('app');
  document.getElementById('sticky').classList.remove('on'); document.body.style.removeProperty('--st');
  document.getElementById('search').classList.remove('open');
  if (!a) { app.innerHTML = home(); hero(); revI = 0; clearInterval(revT); revT = setInterval(()=>revGo(1), 7000); }
  else if (a==='c') { app.innerHTML = collection(b); bindCollection(b); }
  else if (a==='search') { const s=decodeURIComponent(b||''); app.innerHTML = collection(null,s); bindCollection(null,s); }
  else if (a==='p') { app.innerHTML = product(b); bindSticky(byH(b)); }
  else if (a==='wishlist') app.innerHTML = wishlist();
  else if (a==='page') app.innerHTML = page(b);
  syncWish();
  scrollTo(0,0);
  fx(app);
}
function bindSticky(p){
  if (!p || !canBuy(p)) return;
  const st = document.getElementById('sticky'), btn = document.getElementById('mainAdd');
  document.getElementById('stT').textContent = p.t; document.getElementById('stP').textContent = eur(p.p);
  document.getElementById('stB').onclick = () => add(p.h, +document.getElementById('qty').value||1, selVar());
  new IntersectionObserver(([e]) => { const on = !e.isIntersecting && e.boundingClientRect.top < 0; st.classList.toggle('on', on); document.body.style.setProperty('--st', on ? '64px' : '0px'); }).observe(btn);
}
function syncWish(){ document.querySelectorAll('[data-wish]').forEach(b=>b.classList.toggle('on',wish.includes(b.dataset.wish))); counts(); }
document.addEventListener('click', e => {
  const w = e.target.closest('[data-wish]'); if (!w) return;
  e.preventDefault(); const h = w.dataset.wish;
  wish = wish.includes(h) ? wish.filter(x=>x!==h) : [...wish, h]; store.set('sfy:wishlist', wish);
  toast(wish.includes(h) ? '♥ '+t('wish') : '♡ '+t('wish')); syncWish();
  if (location.hash === '#/wishlist') route();
});
document.addEventListener('keydown', e => { if (e.key==='Escape'){ closeCart(); toggleM(false); } });
addEventListener('scroll', () => document.getElementById('hdr').classList.toggle('small', scrollY > 80), {passive:true});
function goHome(e){ if(!location.hash||location.hash==='#/'||location.hash==='#'){ e&&e.preventDefault(); route(); scrollTo({top:0,behavior:'smooth'}); } }
addEventListener('hashchange', () => { toggleM(false); closeCart(); route(); });
document.getElementById('lang').onchange = e => setLang(e.target.value);

/* Ankündigungsleiste */
if (document.querySelector('#ann span')) setInterval(() => { const s=[...document.querySelectorAll('#ann span')]; const i=s.findIndex(x=>x.classList.contains('on')); s[i].classList.remove('on'); s[(i+1)%s.length].classList.add('on'); }, 5000);

lang = (/[?&]lang=(it|de|en)/.exec(location.search)||[])[1] || store.get('sfy-demo:lang2','de'); document.getElementById('lang').value = lang;
buildNav(); i18n(); route(); counts();
// Vorschau: Cookie-Hinweis nicht automatisch einblenden (im Footer über „Cookie-Einstellungen“ erreichbar)
// if (!store.get('sfy-demo:cookie',0)) setTimeout(()=>cookie(true), 800);

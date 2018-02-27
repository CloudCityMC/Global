var href = window.location.pathname;
href = href.toLowerCase();
href = href.replace('.html', '');
var sub = href.substring(href.length - 1);
if (sub == "/") {
  href = href.substring(0, href.length - 2);
}
if (href == "/vote") {
  window.location = "https://forums.cloudcitymc.us/threads/official-server-vote-links.5/";
}
if (href == "/report") {
  window.location = "https://forums.cloudcitymc.us/forums/report-players.10/";
}
if (href == "/sell") {
  window.location = "https://forums.cloudcitymc.us/threads/items-that-cant-be-should-but-should.9/";
}
if (href == "/shop") {
  window.location = "https://forums.cloudcitymc.us/threads/items-that-should-be-sold-in-the-shop.10/";
}
if (href == "/rules") {
  window.location = "https://smp.cloudcitymc.us/rules";
}
if (href == "/terms") {
  window.location = "https://smp.cloudcitymc.us/terms";
}
if (href == "/usefulcommands") {
  window.location = "https://smp.cloudcitymc.us/UsefulCommands";
}
if (href == "/itemprices") {
  window.location = "https://smp.cloudcitymc.us/ItemPrices";
}
if (href == "/enchantments") {
  window.location = "https://smp.cloudcitymc.us/enchantments";
}

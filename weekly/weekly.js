(function () {
  const bulletin = window.currentBulletin;

  if (!bulletin) {
    document.getElementById("bulletin-title").textContent = "目前無法載入本週週報";
    return;
  }

  const setText = (id, value) => {
    const target = document.getElementById(id);
    if (target) {
      target.textContent = value;
    }
  };

  setText("bulletin-title", bulletin.title);
  setText("bulletin-date", bulletin.dateLabel);
  setText("sermon-title", bulletin.sermon.title);
  setText("sermon-scripture", bulletin.sermon.scripture);
  setText("leaders-text", bulletin.leadersText);
  setText("contact-text", bulletin.contact);

  const liturgyList = document.getElementById("liturgy-list");
  bulletin.liturgy.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "notice-item";
    article.innerHTML =
      "<p class=\"notice-index\">0" +
      (index + 1) +
      "</p>" +
      "<div><h3>" +
      item.step +
      "</h3><p>" +
      item.detail +
      "</p></div>";
    liturgyList.appendChild(article);
  });

  const announcementList = document.getElementById("announcement-list");
  bulletin.announcements.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "notice-item";
    article.innerHTML =
      "<p class=\"notice-index\">0" +
      (index + 1) +
      "</p>" +
      "<div><h3>" +
      item.title +
      "</h3><p>" +
      item.content +
      "</p></div>";
    announcementList.appendChild(article);
  });

  const renderInfoList = (id, data) => {
    const target = document.getElementById(id);
    Object.entries(data).forEach(([term, description]) => {
      const dt = document.createElement("dt");
      dt.textContent = term;
      const dd = document.createElement("dd");
      dd.textContent = description;
      target.appendChild(dt);
      target.appendChild(dd);
    });
  };

  renderInfoList("schedule-list", bulletin.schedule);
  renderInfoList("service-this-week", bulletin.serviceThisWeek);
  renderInfoList("service-next-week", bulletin.serviceNextWeek);
})();

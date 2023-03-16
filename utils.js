function GetrandomAyaNumber() {
  const ayatMinimumFromNumber = 1;

  const ayatMaximumAtNumber = 6236;

  return (
    Math.floor(
      Math.random() * (ayatMaximumAtNumber - ayatMinimumFromNumber + 1)
    ) + ayatMinimumFromNumber
  );
}

function getUserLanguage() {
  const lng = navigator.language;

  return "ar" || lng;
}

async function getRandomAya(lang) {
  let randomAyaNumber = GetrandomAyaNumber();

  let content = "";

  try {
    const url = `http://api.alquran.cloud/v1/ayah/${randomAyaNumber}/${lang}.asad`;
    let response = await fetch(url);
    const data = await response.json();
    let aya = data.data.text;

    let ayaNumber = data.data.numberInSurah;

    let surahName =
      lang === "ar" ? data.data.surah.name : data.data.surah.englishName;

    content = `${aya}✨
    
        ${surahName} (${ayaNumber})
          `;
  } catch (error) {
    content = `✨لا إله إلا أنت سبحانك إني كنت من الظالمين
          🔴 غير متصل بالشبكة  `;
  }

  return content;
}

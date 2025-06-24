document.getElementById("filterBtn").addEventListener("click", () => {
      const keyword = document.getElementById("searchKeyword").value.toLowerCase();
      const country = document.getElementById("countryFilter").value;
      const level = document.getElementById("levelFilter").value;

    const results = [
  { title: "Bourse Excellence France", country: "France", level: "Master" },
  { title: "Bourse d'étude Canada", country: "Canada", level: "Licence" },
  { title: "Doctorat en IA USA", country: "USA", level: "Doctorat" },
  { title: "Bourse Erasmus Europe", country: "France", level: "Licence" },
  { title: "Bourse Chevening UK", country: "Royaume-Uni", level: "Master" },
  { title: "Bourse DAAD Allemagne", country: "Allemagne", level: "Doctorat" },
  { title: "Programme Fulbright", country: "USA", level: "Master" },
  { title: "Bourse de la francophonie", country: "Canada", level: "Doctorat" },
  { title: "Bourse Science & Tech", country: "Allemagne", level: "Licence" },
  { title: "Bourse Mérite Afrique", country: "France", level: "Licence" },
  { title: "Bourse Excellence Québec", country: "Canada", level: "Master" },
  { title: "PhD en Robotique", country: "USA", level: "Doctorat" },
  { title: "Bourse Master Biologie", country: "France", level: "Master" },
  { title: "Stage d'été Berlin", country: "Allemagne", level: "Licence" },
  { title: "Bourse d’échange Toronto", country: "Canada", level: "Licence" },
  { title: "Bourse STEM Royaume-Uni", country: "Royaume-Uni", level: "Licence" },
  { title: "Doctorat en Énergies Renouvelables", country: "France", level: "Doctorat" },
  { title: "Master en Droit International", country: "Canada", level: "Master" },
  { title: "Bourse IA Allemagne", country: "Allemagne", level: "Master" },
  { title: "Bourse Journalisme USA", country: "USA", level: "Licence" },
  { title: "Échange Universitaire Lyon", country: "France", level: "Licence" },
  { title: "Master en Finances Toronto", country: "Canada", level: "Master" },
  { title: "PhD Sciences Politiques", country: "USA", level: "Doctorat" },
  { title: "Bourse Informatique Berlin", country: "Allemagne", level: "Licence" },
  { title: "Master en Design UK", country: "Royaume-Uni", level: "Master" },
  { title: "Licence Sciences de la Vie", country: "France", level: "Licence" },
  { title: "Doctorat en Neurosciences", country: "Canada", level: "Doctorat" },
  { title: "Bourse Data Science USA", country: "USA", level: "Master" },
  { title: "Master en Architecture", country: "Allemagne", level: "Master" },
  { title: "Bourse Excellence Afrique", country: "France", level: "Doctorat" },
  { title: "Bourse Humanités Oxford", country: "Royaume-Uni", level: "Master" },
  { title: "Bourse Ingénierie Polytechnique", country: "France", level: "Licence" },
  { title: "Programme Doctoral McGill", country: "Canada", level: "Doctorat" },
  { title: "Bourse Internationale MIT", country: "USA", level: "Doctorat" },
  { title: "Master en Science Politique Berlin", country: "Allemagne", level: "Master" },
  { title: "Licence Lettres Modernes Sorbonne", country: "France", level: "Licence" },
  { title: "Bourse Green Energy USA", country: "USA", level: "Master" },
  { title: "Bourse Agro ParisTech", country: "France", level: "Licence" },
  { title: "Doctorat en Médecine Génétique", country: "Canada", level: "Doctorat" },
  { title: "Bourse Design et Innovation", country: "Allemagne", level: "Licence" },
  { title: "Master Cybersécurité Royaume-Uni", country: "Royaume-Uni", level: "Master" },
  { title: "PhD Climatologie et Environnement", country: "USA", level: "Doctorat" },
  { title: "Bourse Art et Culture", country: "France", level: "Licence" },
  { title: "Master Relations Internationales", country: "Canada", level: "Master" },
  { title: "Bourse High-Tech Allemagne", country: "Allemagne", level: "Doctorat" }
];

      const filtered = results.filter(b => {
        return (
          (!keyword || b.title.toLowerCase().includes(keyword)) &&
          (!country || b.country === country) &&
          (!level || b.level === level)
        );
      });

      const list = document.getElementById("scholarshipList");
      list.innerHTML = "";
      if (filtered.length === 0) {
        list.innerHTML = "<p>Aucune bourse trouvée.</p>";
      } else {
        filtered.forEach(b => {
          const item = document.createElement("div");
          item.className = "scholarship-item";
          item.innerHTML = `
            <h3>${b.title}</h3>
            <p><strong>Pays:</strong> ${b.country}</p>
            <p><strong>Niveau:</strong> ${b.level}</p>
          `;
          list.appendChild(item);
        });
      }
    });
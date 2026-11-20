// Données agrégées du dataset stroke_anonyme.csv (5 110 dossiers, cours EDA AVC)
// Calculées à partir du fichier source : la version complète (avec pseudo-identifiants) n'est pas distribuée ici.
window.EDA_DATA = {
  "stats": {
    "total": 5110, "avec": 249, "sans": 4861, "taux": 4.9,
    "ageMoyenAvec": 67.7, "ageMoyenSans": 42.0,
    "glucoseMoyenAvec": 132.5, "glucoseMoyenSans": 104.8,
    "bmiMoyenAvec": 30.5, "bmiMoyenSans": 28.8,
    "bmiManquants": 201, "bmiManquantsAvec": 40, "ageMax": 82
  },
  "hist": [
    { "tranche": "0-10",  "n": 472, "avec": 1 },
    { "tranche": "10-20", "n": 494, "avec": 1 },
    { "tranche": "20-30", "n": 549, "avec": 0 },
    { "tranche": "30-40", "n": 655, "avec": 6 },
    { "tranche": "40-50", "n": 730, "avec": 12 },
    { "tranche": "50-60", "n": 834, "avec": 48 },
    { "tranche": "60-70", "n": 621, "avec": 47 },
    { "tranche": "70-80", "n": 569, "avec": 94 },
    { "tranche": "80-90", "n": 186, "avec": 40 }
  ],
  "work": [
    { "v": "Private", "n": 2925, "avec": 149, "pct": 5.1 },
    { "v": "Self-employed", "n": 819, "avec": 65, "pct": 7.9 },
    { "v": "children", "n": 687, "avec": 2, "pct": 0.3 },
    { "v": "Govt_job", "n": 657, "avec": 33, "pct": 5.0 },
    { "v": "Never_worked", "n": 22, "avec": 0, "pct": 0 }
  ],
  "smoke": [
    { "v": "never smoked", "n": 1892, "avec": 90, "pct": 4.8 },
    { "v": "Unknown", "n": 1544, "avec": 47, "pct": 3.0 },
    { "v": "formerly smoked", "n": 885, "avec": 70, "pct": 7.9 },
    { "v": "smokes", "n": 789, "avec": 42, "pct": 5.3 }
  ],
  "residence": [
    { "v": "Urban", "n": 2596, "avec": 135, "pct": 5.2 },
    { "v": "Rural", "n": 2514, "avec": 114, "pct": 4.5 }
  ],
  "gender": [
    { "v": "Anonymisé A", "n": 2994, "avec": 141, "pct": 4.7 },
    { "v": "Anonymisé B", "n": 2115, "avec": 108, "pct": 5.1 },
    { "v": "Anonymisé C", "n": 1, "avec": 0, "pct": 0 }
  ],
  "hyper": [
    { "v": "Sans hypertension", "n": 4612, "avec": 183, "pct": 4.0 },
    { "v": "Hypertension", "n": 498, "avec": 66, "pct": 13.3 }
  ],
  "heart": [
    { "v": "Sans maladie cardiaque", "n": 4834, "avec": 202, "pct": 4.2 },
    { "v": "Maladie cardiaque", "n": 276, "avec": 47, "pct": 17.0 }
  ],
  "married": [
    { "v": "Déjà marié", "n": 3353, "avec": 220, "pct": 6.6 },
    { "v": "Jamais marié", "n": 1757, "avec": 29, "pct": 1.7 }
  ],
  "marriage": [
    { "tranche": "0-39 ans", "groupe": "Jamais marié", "n": 1499, "avec": 3, "pct": 0.2 },
    { "tranche": "0-39 ans", "groupe": "Déjà marié", "n": 671, "avec": 5, "pct": 0.7 },
    { "tranche": "40-59 ans", "groupe": "Jamais marié", "n": 151, "avec": 5, "pct": 3.3 },
    { "tranche": "40-59 ans", "groupe": "Déjà marié", "n": 1413, "avec": 55, "pct": 3.9 },
    { "tranche": "60 ans et +", "groupe": "Jamais marié", "n": 107, "avec": 21, "pct": 19.6 },
    { "tranche": "60 ans et +", "groupe": "Déjà marié", "n": 1269, "avec": 160, "pct": 12.6 }
  ]
};

// FORESCORE TRACKER — Datos
// Editar este archivo para agregar/actualizar apuestas.
// Estado: PENDIENTE | GANADA | PERDIDA | VOID
const TRACKER_DATA = [
  {
    "id": "001",
    "fecha": "2026-03-06",
    "jornada": 23,
    "liga": "D1",
    "partido": "Bayern München vs Bayer Leverkusen",
    "lambda_base_l": 2.24,
    "lambda_base_v": 1.42,
    "lambda_ajust_l": 2.465,
    "lambda_ajust_v": 1.448,
    "lambda_corners": 11.88,
    "ratio": 1.702,
    "filtro_r": "R-B",
    "variables_activas": "V#2(L:0.96) · V#3(L:0.93) · V#4(L:1.10) · V#4(V:1.05) · V#12(L:1.10)",
    "hs": "+1.81",
    "confianza": "MEDIA",
    "valla_bb": "OK",
    "notas": "Top-7 Bayern 6dom+1UCL · Top-7 Leverkusen 6dom+1UEL",
    "resultado_partido": "3-1",
    "apuestas": [
      {
        "tipo": "BB",
        "mercado": "DO 1X + Over 0.5 Bayern",
        "cuota": 1.35,
        "prob": 78.2,
        "ev_pct": null,
        "estado": "GANADA",
        "pl": 0.35
      },
      {
        "tipo": "Directa",
        "mercado": "Over 1.5",
        "cuota": 1.28,
        "prob": 90.2,
        "ev_pct": 15.4,
        "estado": "GANADA",
        "pl": 0.28
      },
      {
        "tipo": "Directa",
        "mercado": "Hcp +3 Bayern",
        "cuota": 1.22,
        "prob": 96.7,
        "ev_pct": 18,
        "estado": "GANADA",
        "pl": 0.22
      }
    ]
  },
  {
    "id": "002",
    "fecha": "2026-03-07",
    "jornada": 28,
    "liga": "E0",
    "partido": "Arsenal vs Chelsea",
    "lambda_base_l": 1.82,
    "lambda_base_v": 1.51,
    "lambda_ajust_l": 1.91,
    "lambda_ajust_v": 1.43,
    "lambda_corners": 9.4,
    "ratio": 1.336,
    "filtro_r": "R-B",
    "variables_activas": "V#4(L:1.05) · V#12(L:1.04)",
    "hs": "+0.31",
    "confianza": "ALTA",
    "valla_bb": "OK",
    "notas": "Top-7 Arsenal 7dom+0UEFA · Top-7 Chelsea 7dom+0UEFA",
    "resultado_partido": "1-1",
    "apuestas": [
      {
        "tipo": "BB",
        "mercado": "DO 1X + Over 0.5 Arsenal",
        "cuota": 1.28,
        "prob": 76.4,
        "ev_pct": null,
        "estado": "PERDIDA",
        "pl": -1
      },
      {
        "tipo": "Directa",
        "mercado": "Over 1.5",
        "cuota": 1.32,
        "prob": 83.1,
        "ev_pct": 9.7,
        "estado": "GANADA",
        "pl": 0.32
      }
    ]
  },
  {
    "id": "003",
    "fecha": "2026-03-08",
    "jornada": 27,
    "liga": "SP1",
    "partido": "Real Madrid vs Atletico Madrid",
    "lambda_base_l": 2.01,
    "lambda_base_v": 1.28,
    "lambda_ajust_l": 2.18,
    "lambda_ajust_v": 1.19,
    "lambda_corners": 10.2,
    "ratio": 1.832,
    "filtro_r": "R-B",
    "variables_activas": "V#1(L:1.01) · V#4(L:1.10) · V#8(L:0.96) · V#12(L:1.06)",
    "hs": "+0.68",
    "confianza": "ALTA",
    "valla_bb": "OK",
    "notas": "Derby confirmado · Top-7 Real 7dom · Top-7 Atletico 7dom",
    "resultado_partido": null,
    "apuestas": [
      {
        "tipo": "BB",
        "mercado": "Victoria Real + Over 0.5 Real",
        "cuota": 1.42,
        "prob": 71.3,
        "ev_pct": null,
        "estado": "PENDIENTE",
        "pl": null
      },
      {
        "tipo": "Directa",
        "mercado": "Over 1.5",
        "cuota": 1.25,
        "prob": 87.4,
        "ev_pct": 9.3,
        "estado": "PENDIENTE",
        "pl": null
      },
      {
        "tipo": "Directa",
        "mercado": "Over 6.5 córners",
        "cuota": 1.3,
        "prob": 82.1,
        "ev_pct": 6.7,
        "estado": "PENDIENTE",
        "pl": null
      }
    ]
  }
];

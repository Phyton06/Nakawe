/* ============================================================
 *  Nakawe — Perfiles de Pacientes (compartido)
 *  Datos completos para LUZ (system prompt), dashboard médico,
 *  triage y referencias offline (Historial_pacientes.md).
 *  ============================================================ */

const PACIENTES = [
  // ──────────────────────────────────────────────────────────
  // María Rodríguez — "La que vive sola"
  // ──────────────────────────────────────────────────────────
  {
    id: 1,
    nombre: 'María Rodríguez',
    edad: 68,
    consultorio: 4,
    iniciales: 'MR',
    avatarBg: 'oklch(38% 0.17 160)',
    nss: '12 34 56 7890',
    tipoSangre: 'O+',
    rh: 'Positivo',
    alergias: 'Penicilina',
    alergiasDetalle: [
      { agente: 'Penicilina', reaccion: 'Urticaria', gravedad: 'moderada' },
      { agente: 'Sulfamidas', reaccion: 'Erupción cutánea', gravedad: 'leve' }
    ],
    medico: 'Dra. Laura Méndez',
    proxCita: '12 jun 2026',
    viveCon: 'Sola (hija vive en USA, hablan por video a diario)',
    ocupacion: 'Jubilada — fue costurera',
    estudioMaximo: 'Primaria',
    contactoEmergencia: {
      nombre: 'Elena Rodríguez',
      parentesco: 'Hija',
      telefono: '+52 1 555 123 4567'
    },
    fraseIdentificacion: 'La que vive sola',
    personalidad: 'Dulce, le cuesta pedir ayuda. A veces no es sincera con lo que come (su hija reporta que come pan dulce a escondidas). Le da pena molestar al médico.',
    historiaBreve: 'María enviudó en 2019. Su única hija vive en Estados Unidos y hablan por videollamada todos los días. Ella vive sola en su casa, aunque una vecina la visita seguido. Antes de jubilarse trabajó 35 años como costurera en una fábrica de ropa.',

    alergiasLista: ['Penicilina', 'Sulfamidas'],
    condiciones: [
      { nombre: 'Diabetes tipo 2', diagnosticada: '2016', severidad: 'moderada', controlada: true,
        ultimoRegistro: 'HbA1c 7.2% (mayo 2026)', notas: 'Requiere ajuste, meta < 7.0%' },
      { nombre: 'Hipertensión arterial', diagnosticada: '2018', severidad: 'leve', controlada: 'parcialmente',
        ultimoRegistro: 'PA 138/85 (mayo 2026)', notas: 'Suspendió Losartán por mareo — reevaluar' },
      { nombre: 'Dislipidemia', diagnosticada: '2019', severidad: 'leve', controlada: true,
        ultimoRegistro: 'LDL 98 mg/dL (mar 2026)' },
      { nombre: 'Neuropatía periférica incipiente', diagnosticada: '2026', severidad: 'leve', controlada: false,
        notas: 'En estudio — hormigueo en pies desde hace 2 meses' },
      { nombre: 'Catarata bilateral', diagnosticada: '2025', severidad: 'moderada', controlada: false,
        notas: 'Ojo izquierdo: pendiente de cirugía. Valoración prequirúrgica en junio 2026' }
    ],
    medicamentos: [
      { nombre: 'Metformina 850 mg', dosis: '1 tableta', frecuencia: 'cada 12 horas', horario: '8:00 y 20:00',
        via: 'Oral', proposito: 'Control de glucosa', desde: '2016', activo: true,
        indicaciones: 'Tomar con alimentos', notas: 'Olvida frecuentemente la dosis nocturna' },
      { nombre: 'Losartán 50 mg', dosis: '1 tableta', frecuencia: 'cada 24 horas', horario: '9:00',
        via: 'Oral', proposito: 'Control de presión arterial', desde: '2018', activo: false,
        suspendido: '22 may 2026', motivoSuspension: 'Mareo matutino — autosuspendido',
        notas: 'Evaluar reintroducción o cambio' },
      { nombre: 'Atorvastatina 20 mg', dosis: '1 tableta', frecuencia: 'cada 24 horas', horario: '9:00',
        via: 'Oral', proposito: 'Reducción de colesterol', desde: '2019', activo: true,
        indicaciones: 'Tomar con o sin alimentos' },
      { nombre: 'Paracetamol 500 mg', dosis: '1 tableta', frecuencia: 'según necesidad (PRN)', horario: null,
        via: 'Oral', proposito: 'Dolor leve / cefalea', desde: '—', activo: true,
        indicaciones: 'No exceder 3 tabletas al día', notas: 'Lo usa para dolor de cabeza y molestias en rodilla' },
      { nombre: 'Lágrimas artificiales', dosis: '1 gota', frecuencia: 'cada 6-8 horas', horario: null,
        via: 'Oftálmica', proposito: 'Ojo seco', desde: '2025', activo: true }
    ],
    cirugias: [
      { procedimiento: 'Colecistectomía laparoscópica', fecha: 'Marzo 2015',
        hospital: 'Hospital General de México', complicaciones: 'Ninguna' },
      { procedimiento: 'Cesárea', fecha: '1985',
        hospital: 'Hospital de la Mujer', complicaciones: 'Ninguna' }
    ],
    hospitalizaciones: [
      { motivo: 'Descontrol glucémico (HBA1c 9.8%)', fecha: 'Enero 2020', duracion: '3 días',
        hospital: 'Hospital General', diagnosticos: ['Diabetes descompensada', 'Deshidratación leve'] },
      { motivo: 'Infección de vías urinarias complicada', fecha: 'Agosto 2022', duracion: '2 días',
        hospital: 'Hospital General', diagnosticos: ['Pielonefritis aguda'] }
    ],
    estudios: [
      { nombre: 'HbA1c', resultado: '7.2 %', fecha: 'mayo 2026', rangoNormal: '< 7.0 %', pendiente: false },
      { nombre: 'Creatinina sérica', resultado: '0.9 mg/dL', fecha: 'mayo 2026', rangoNormal: '0.6-1.2 mg/dL', pendiente: false },
      { nombre: 'Microalbuminuria', resultado: '45 mg/g', fecha: 'mayo 2026', rangoNormal: '< 30 mg/g', pendiente: false },
      { nombre: 'Perfil lipídico', resultado: 'LDL 98, HDL 45, TG 150 mg/dL', fecha: 'marzo 2026', rangoNormal: 'LDL < 100, HDL > 40', pendiente: false },
      { nombre: 'Fondo de ojo', resultado: 'Retinopatía diabética leve no proliferativa', fecha: 'abril 2026', pendiente: true },
      { nombre: 'Valoración prequirúrgica catarata', resultado: '—', fecha: 'junio 2026', pendiente: true }
    ],
    familiares: [
      { parentesco: 'Madre', condiciones: ['Diabetes tipo 2', 'Hipertensión arterial'], fallecio: true, edadFallecimiento: 78 },
      { parentesco: 'Padre', condiciones: ['Cáncer de próstata'], fallecio: true, edadFallecimiento: 72 },
      { parentesco: 'Hermano mayor', condiciones: ['Diabetes tipo 2'], fallecio: false, edad: 72 }
    ],
    citas: [
      { fecha: '12 jun 2026', tipo: 'Valoración prequirúrgica (catarata)', con: 'Dr. Vargas (Oftalmología)', lugar: 'Consultorio 5' },
      { fecha: '10 jul 2026', tipo: 'Control endocrinología', con: 'Dra. Laura Méndez', lugar: 'Consultorio 4' }
    ],
    signosVitales: {
      peso: '72 kg', talla: '1.58 m', imc: 28.8,
      presion: '138/85', temperatura: '36.8 °C',
      glucosa: '112 mg/dL', frecuenciaCardiaca: '78 lpm',
      spo2: '96 %', fecha: '25 may 2026'
    },
    peso: '72 kg',
    presion: '138/85',
    temperatura: '36.8 °C',
    glucosa: '112 mg/dL',
    adherencia: 87,
    sintomas: [
      'Hormigueo en pies que empeora en las noches — desde hace 2 meses',
      'Mareos matutinos los días 22 y 23 de mayo',
      'Dolor de cabeza ocasional',
      'Molestia leve en la rodilla derecha al caminar'
    ],
    alertas: [
      'SUSPENDIÓ Losartán por mareo matutino (22-23 may) — autosuspendido, no consultó',
      'Hormigueo en extremidades inferiores — posible neuropatía diabética',
      'HbA1c 7.2% — por encima de la meta (< 7.0%)',
      'Microalbuminuria elevada (45 mg/g) — posible nefropatía incipiente',
      'Cirugía de catarata pendiente — su hija no podrá acompañarla'
    ],
    chats: [
      { role: 'user', text: 'Me duele un poco la cabeza' },
      { role: 'luz', text: '¿Desde cuándo tienes el dolor?' },
      { role: 'user', text: 'Desde ayer en la noche' },
      { role: 'luz', text: '¿Has tomado algo para el dolor?' },
      { role: 'user', text: 'No, pero dejé de tomar Losartán porque me mareaba mucho' },
      { role: 'luz', text: 'Entendido. Anotaré lo del Losartán para que lo sepa tu médico. ¿Quieres que te recuerde tomar Paracetamol?' }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // Pedro Hernández — "El del corazón"
  // ──────────────────────────────────────────────────────────
  {
    id: 2,
    nombre: 'Pedro Hernández',
    edad: 72,
    consultorio: 2,
    iniciales: 'PH',
    avatarBg: 'oklch(45% 0.14 240)',
    nss: '98 76 54 3210',
    tipoSangre: 'A+',
    rh: 'Positivo',
    alergias: 'Aspirina',
    alergiasDetalle: [
      { agente: 'Ácido acetilsalicílico (Aspirina)', reaccion: 'Urticaria y angioedema leve', gravedad: 'moderada' }
    ],
    medico: 'Dr. Roberto García',
    proxCita: '19 jun 2026',
    viveCon: 'Su esposa Amelia (artritis reumatoide). Su hijo Juan es enfermero y vive cerca.',
    ocupacion: 'Jubilado — fue albañil y después velador',
    estudioMaximo: 'Primaria incompleta',
    contactoEmergencia: {
      nombre: 'Juan Hernández',
      parentesco: 'Hijo',
      telefono: '+52 1 555 987 6543'
    },
    fraseIdentificacion: 'El del corazón',
    personalidad: 'Reservado y estoico. Le cuesta expresar lo que siente. Su hijo lo empuja a atenderse. Fumó durante 40 años (dejó a los 67). Toma cerveza los domingos. No quiere "preocupar a su esposa" con sus síntomas.',
    historiaBreve: 'Pedro trabajó como albañil desde los 15 años, luego fue velador en una bodega hasta jubilarse. Su hermano mayor tuvo un infarto y su papá murió del corazón a los 68 — ese es su mayor miedo. Desde el infarto en 2022, dejó de fumar pero sigue sintiendo que "su corazón ya no es el mismo".',

    alergiasLista: ['Aspirina (AAS)'],
    condiciones: [
      { nombre: 'Cardiopatía isquémica — IAM inferolateral con elevación ST', diagnosticada: '2022', severidad: 'moderada', controlada: true,
        ultimoRegistro: 'ECO estrés sin isquemia inducible (dic 2025)', notas: 'Stent farmacoactivo en CD (jul 2022)' },
      { nombre: 'EPOC leve (GOLD 1)', diagnosticada: '2024', severidad: 'leve', controlada: true,
        ultimoRegistro: 'VEF1 68% (dic 2025)' },
      { nombre: 'Hipertensión arterial', diagnosticada: '2020', severidad: 'moderada', controlada: 'parcialmente',
        ultimoRegistro: 'PA 145/90 (may 2026)' },
      { nombre: 'Dislipidemia mixta', diagnosticada: '2020', severidad: 'moderada', controlada: 'parcialmente',
        ultimoRegistro: 'LDL 112, HDL 38, TG 180 (dic 2025)' },
      { nombre: 'Glucemia elevada (probable DM2 no diagnosticada)', diagnosticada: '—', severidad: '—', controlada: false,
        notas: 'Glucosa capilar 156 mg/dL — pendiente confirmación diagnóstica' }
    ],
    medicamentos: [
      { nombre: 'Clopidogrel 75 mg', dosis: '1 tableta', frecuencia: 'cada 24 horas', horario: '10:00',
        via: 'Oral', proposito: 'Antiagregante plaquetario (prevención IAM recurrente)', desde: 'jul 2022', activo: true },
      { nombre: 'Atorvastatina 40 mg', dosis: '1 tableta', frecuencia: 'cada 24 horas', horario: '10:00',
        via: 'Oral', proposito: 'Reducción de colesterol LDL', desde: 'jul 2022', activo: true },
      { nombre: 'Enalapril 10 mg', dosis: '1 tableta', frecuencia: 'cada 12 horas', horario: '10:00 y 22:00',
        via: 'Oral', proposito: 'Control de presión arterial', desde: '2020', activo: true },
      { nombre: 'Salbutamol inhalador 100 mcg', dosis: '2 inhalaciones', frecuencia: 'según necesidad (PRN)',
        via: 'Inhalada', proposito: 'Broncodilatador — disnea o silbido', desde: '2024', activo: true,
        indicaciones: 'Usar máximo 4 veces al día' }
    ],
    cirugias: [
      { procedimiento: 'Cateterismo cardíaco + implante de stent farmacoactivo en coronaria derecha',
        fecha: 'Julio 2022', hospital: 'Hospital de Cardiología',
        complicaciones: 'Ninguna', notas: 'Acceso por radial derecha' }
    ],
    hospitalizaciones: [
      { motivo: 'Infarto agudo de miocardio inferolateral con elevación del ST', fecha: 'Julio 2022',
        duracion: '7 días', hospital: 'Hospital de Cardiología',
        diagnosticos: ['IAM inferolateral', 'Enfermedad coronaria de un vaso (CD)'] },
      { motivo: 'Neumonía adquirida en la comunidad', fecha: 'Noviembre 2024',
        duracion: '5 días', hospital: 'Hospital General',
        diagnosticos: ['Neumonía bacteriana lóbulo inferior derecho'] }
    ],
    estudios: [
      { nombre: 'Ecocardiograma de estrés', resultado: 'Normal — sin isquemia inducible', fecha: 'diciembre 2025', pendiente: false },
      { nombre: 'Espirometría', resultado: 'VEF1 68% (EPOC leve GOLD 1)', fecha: 'diciembre 2025', pendiente: false },
      { nombre: 'Perfil lipídico', resultado: 'LDL 112, HDL 38, TG 180 mg/dL', fecha: 'diciembre 2025', pendiente: false },
      { nombre: 'Glucosa sérica', resultado: '156 mg/dL', fecha: 'mayo 2026', rangoNormal: '< 100 mg/dL', pendiente: false },
      { nombre: 'ECG de control', resultado: 'Ritmo sinusal, ondas Q en inferiores', fecha: 'mayo 2026', pendiente: false },
      { nombre: 'Hemoglobina glucosilada', resultado: '— (pendiente)', fecha: 'junio 2026', pendiente: true }
    ],
    familiares: [
      { parentesco: 'Padre', condiciones: ['Infarto agudo de miocardio'], fallecio: true, edadFallecimiento: 68 },
      { parentesco: 'Madre', condiciones: ['Hipertensión arterial'], fallecio: false, edad: 88 },
      { parentesco: 'Hermano mayor', condiciones: ['Cardiopatía isquémica — bypass coronario a los 70'], fallecio: false, edad: 73 },
      { parentesco: 'Hermana', condiciones: ['Diabetes tipo 2'], fallecio: false, edad: 68 }
    ],
    citas: [
      { fecha: '19 jun 2026', tipo: 'Control cardiología', con: 'Dr. Roberto García', lugar: 'Consultorio 2' },
      { fecha: 'Agosto 2026', tipo: 'Espirometría de control', con: 'Neumología', lugar: 'Consultorio 7' }
    ],
    signosVitales: {
      peso: '85 kg', talla: '1.72 m', imc: 28.7,
      presion: '145/90', temperatura: '36.6 °C',
      glucosa: '156 mg/dL', frecuenciaCardiaca: '88 lpm',
      spo2: '93 %', fecha: '25 may 2026'
    },
    peso: '85 kg',
    presion: '145/90',
    temperatura: '36.6 °C',
    glucosa: '156 mg/dL',
    adherencia: 94,
    sintomas: [
      'Dolor torácico breve (~10 segundos) la noche del 23 de mayo — una sola vez',
      'Disnea leve al subir escaleras (2 pisos)',
      'Tos matutina con expectoración clara'
    ],
    alertas: [
      'DOLOR TORÁCICO REPORTADO (23 may) — breve, autolimitado, pero en paciente con IAM previo',
      'Glucosa elevada (156 mg/dL) — probable diabetes tipo 2 no diagnosticada',
      'PA 145/90 — por encima de meta (< 130/80 en cardiópata)',
      'SpO2 93% — limítrofe, monitorizar',
      'Asiste irregularmente a rehabilitación cardíaca',
      'Alto riesgo psicosocial: miedo intenso a morir del corazón (antecedente padre + hermano)'
    ],
    chats: [
      { role: 'user', text: 'Sentí como un apretón en el pecho anoche' },
      { role: 'luz', text: '¿Cuánto duró la molestia?' },
      { role: 'user', text: 'Unos segundos nomás, como 10 segundos' },
      { role: 'luz', text: '¿Se repitió o fue solo una vez?' },
      { role: 'user', text: 'Solo una vez. Ya estoy bien' },
      { role: 'luz', text: 'Gracias por reportarlo. Voy a incluirlo en tu reporte para el médico. ¿Tomaste algo?' },
      { role: 'user', text: 'No, mi hijo dice que si vuelve a pasar vaya al hospital' },
      { role: 'luz', text: 'Tu hijo tiene razón. Si vuelve a pasar, busca atención médica de inmediato.' }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // Carmen López — "La de la cadera nueva"
  // ──────────────────────────────────────────────────────────
  {
    id: 3,
    nombre: 'Carmen López',
    edad: 65,
    consultorio: 1,
    iniciales: 'CL',
    avatarBg: 'oklch(55% 0.14 85)',
    nss: '45 67 89 0123',
    tipoSangre: 'B+',
    rh: 'Positivo',
    alergias: 'Sulfa',
    alergiasDetalle: [
      { agente: 'Sulfonamidas (Sulfa)', reaccion: 'Erupción cutánea generalizada', gravedad: 'moderada' }
    ],
    medico: 'Dra. Laura Méndez',
    proxCita: '5 jun 2026',
    viveCon: 'Su hija Lupita (38), su yerno y dos nietos (8 y 5 años)',
    ocupacion: 'Jubilada — fue secretaria en una escuela primaria',
    estudioMaximo: 'Secundaria completa',
    contactoEmergencia: {
      nombre: 'Guadalupe López',
      parentesco: 'Hija',
      telefono: '+52 1 555 456 7890'
    },
    fraseIdentificacion: 'La de la cadera nueva',
    personalidad: 'Alegre y conversadora, pero últimamente frustrada. Extraña caminar sin bastón y poder jugar con sus nietos. Se siente "una carga" para su hija. Duerme mal desde la operación.',
    historiaBreve: 'Carmen trabajó 30 años como secretaria en una escuela primaria. Desde que se jubiló, ayuda a cuidar a sus nietos mientras su hija trabaja. La osteoartrosis la fue limitando hasta que ya no podía caminar sin dolor. Se operó de la cadera en febrero de 2026, pero la recuperación ha sido lenta y complicada. Su mamá murió por complicaciones de una fractura de cadera — ese es su trauma más grande.',

    alergiasLista: ['Sulfonamidas'],
    condiciones: [
      { nombre: 'Osteoartrosis generalizada', diagnosticada: '2015', severidad: 'moderada', controlada: false,
        notas: 'Cadera derecha reemplazada (feb 2026). Rodillas con dolor moderado.' },
      { nombre: 'Osteoporosis severa', diagnosticada: '2020', severidad: 'severa', controlada: false,
        ultimoRegistro: 'T-score -2.8 cadera (2026)', notas: 'Fractura de muñeca en 2023' },
      { nombre: 'Síndrome de inmovilidad post-quirúrgica', diagnosticada: '2026', severidad: 'leve', controlada: false,
        notas: '3 meses post-RTC cadera derecha. Recuperación lenta.' },
      { nombre: 'IVU recurrente', diagnosticada: '2024', severidad: 'leve', controlada: false,
        notas: '3 episodios en 2025. Actual: suspendió Cefalexina por gastritis.' }
    ],
    medicamentos: [
      { nombre: 'Ibuprofeno 400 mg', dosis: '1 tableta', frecuencia: 'cada 8 horas (PRN)', horario: null,
        via: 'Oral', proposito: 'Dolor osteoarticular', desde: '—', activo: true,
        indicaciones: 'No exceder 3 tabletas al día. Tomar con alimentos.',
        notas: 'Lo usa casi a diario por dolor en la cadera operada' },
      { nombre: 'Calcio 500 mg + Vitamina D 800 UI', dosis: '1 tableta', frecuencia: 'cada 24 horas',
        horario: '9:00', via: 'Oral', proposito: 'Suplemento óseo (osteoporosis)', desde: '2020', activo: true },
      { nombre: 'Omeprazol 20 mg', dosis: '1 cápsula', frecuencia: 'cada 24 horas', horario: '7:00 (en ayunas)',
        via: 'Oral', proposito: 'Protección gástrica (por AINEs)', desde: '2023', activo: true },
      { nombre: 'Acetaminofén 500 mg', dosis: '1 tableta', frecuencia: 'cada 8 horas (PRN)', horario: null,
        via: 'Oral', proposito: 'Dolor leve (alternativa al Ibuprofeno)', desde: '—', activo: true },
      { nombre: 'Cefalexina 500 mg', dosis: '1 cápsula', frecuencia: 'cada 6 horas', horario: null,
        via: 'Oral', proposito: 'Antibiótico para IVU', desde: '24 may 2026', activo: false,
        suspendido: '26 may 2026', motivoSuspension: 'Ardor y pesadez estomacal — tomó solo 3 de 7 días',
        notas: 'Pendiente de cambio de antibiótico' }
    ],
    cirugias: [
      { procedimiento: 'Reemplazo total de cadera derecha (artroplastía)', fecha: '10 Febrero 2026',
        hospital: 'Hospital de Traumatología', complicaciones: 'ITU post-operatoria resolvió con tratamiento',
        notas: 'Prótesis cementada. Evolución: lenta pero dentro de lo esperado.' },
      { procedimiento: 'Cesárea', fecha: '1988', hospital: 'Hospital General', complicaciones: 'Ninguna' }
    ],
    hospitalizaciones: [
      { motivo: 'Cirugía de reemplazo de cadera derecha', fecha: 'Febrero 2026', duracion: '4 días',
        hospital: 'Hospital de Traumatología', diagnosticos: ['Coxartrosis derecha', 'Osteoporosis severa'] },
      { motivo: 'Pielonefritis aguda', fecha: 'Marzo 2025', duracion: '5 días',
        hospital: 'Hospital General', diagnosticos: ['Pielonefritis aguda izquierda'] }
    ],
    estudios: [
      { nombre: 'Densitometría ósea', resultado: 'T-score -2.8 cadera (osteoporosis)', fecha: 'enero 2026', pendiente: false },
      { nombre: 'Radiografía de cadera derecha', resultado: 'Prótesis en posición adecuada, sin signos de aflojamiento', fecha: 'abril 2026', pendiente: false },
      { nombre: 'Proteína C reactiva', resultado: '4.2 mg/L (leve elevación)', fecha: 'mayo 2026', rangoNormal: '< 3.0 mg/L', pendiente: false },
      { nombre: 'Urocultivo', resultado: 'Pendiente de resultado', fecha: 'mayo 2026', pendiente: true },
      { nombre: 'PCR de control', resultado: '— (pendiente después de suspender antibiótico)', fecha: 'junio 2026', pendiente: true }
    ],
    familiares: [
      { parentesco: 'Madre', condiciones: ['Osteoporosis severa', 'Fractura de cadera a los 72'], fallecio: true, edadFallecimiento: 74,
        notas: 'Falleció por complicaciones post-quirúrgicas de fractura de cadera' },
      { parentesco: 'Padre', condiciones: ['Hipertensión arterial'], fallecio: true, edadFallecimiento: 76,
        causa: 'ACV isquémico' }
    ],
    citas: [
      { fecha: '5 jun 2026', tipo: 'Control traumatología y rehabilitación', con: 'Dra. Laura Méndez', lugar: 'Consultorio 1' },
      { fecha: '2×/semana', tipo: 'Rehabilitación física', con: 'Fisioterapeuta', lugar: 'Rehabilitación' }
    ],
    signosVitales: {
      peso: '63 kg', talla: '1.62 m', imc: 24.0,
      presion: '125/80', temperatura: '37.1 °C',
      glucosa: '98 mg/dL', frecuenciaCardiaca: '82 lpm',
      spo2: '97 %', fecha: '25 may 2026'
    },
    peso: '63 kg',
    presion: '125/80',
    temperatura: '37.1 °C',
    glucosa: '98 mg/dL',
    adherencia: 72,
    sintomas: [
      'SUSPENDIÓ Cefalexina por ardor/pesadez estomacal — solo tomó 3 de 7 días',
      'Dolor en cadera derecha al caminar (EVA 4/10)',
      'Insomnio: se despierta cada 2-3 horas por dolor',
      'Frustración por recuperación lenta ("ya debía estar bien a estas alturas")'
    ],
    alertas: [
      'SUSPENDIÓ ANTIBIÓTICO (Cefalexina) — riesgo de IVU recurrente o resistencia bacteriana',
      'Dolor post-quirúrgico persistente (3 meses post-RTC) — evaluar causa',
      'Insomnio crónico desde la cirugía — podría afectar recuperación',
      'IMC 24.0 normal, pero pérdida de peso no intencional desde la cirugía (-3 kg)',
      'Trauma por muerte de la madre: falleció por complicaciones de fractura de cadera',
      'Siente que es "una carga" para su hija'
    ],
    chats: [
      { role: 'user', text: 'El antibiótico me cayó muy pesado' },
      { role: 'luz', text: '¿Qué tipo de molestia sientes?' },
      { role: 'user', text: 'Ardor y pesadez después de tomarlo' },
      { role: 'luz', text: '¿Lo dejaste de tomar o sigues con el tratamiento?' },
      { role: 'user', text: 'Lo dejé ayer, no aguantaba' },
      { role: 'luz', text: 'Entiendo. Voy a reportarlo a tu médico para que evalúe el cambio. No dejes de tomar el calcio y la vitamina D.' },
      { role: 'user', text: 'Gracias, ¿puedo tomar un probiótico mientras?' },
      { role: 'luz', text: 'Los probióticos son seguros, pero mejor consulta con la doctora Méndez si hay alguno específico que recomiende para tu caso.' }
    ]
  },

  // ──────────────────────────────────────────────────────────
  // José Martínez — "El recién jubilado"
  // ──────────────────────────────────────────────────────────
  {
    id: 4,
    nombre: 'José Martínez',
    edad: 70,
    consultorio: 3,
    iniciales: 'JM',
    avatarBg: 'oklch(50% 0.16 30)',
    nss: '32 10 98 7654',
    tipoSangre: 'O+',
    rh: 'Positivo',
    alergias: 'Ninguna',
    alergiasDetalle: [],
    medico: 'Dr. Roberto García',
    proxCita: '26 jun 2026',
    viveCon: 'Su esposa Rosa (68). Ambos se jubilaron en 2025. Tienen dos hijas que viven en la misma ciudad.',
    ocupacion: 'Jubilado — fue contador público',
    estudioMaximo: 'Licenciatura en Contaduría',
    contactoEmergencia: {
      nombre: 'Rosa Martínez',
      parentesco: 'Esposa',
      telefono: '+52 1 555 234 5678'
    },
    fraseIdentificacion: 'El recién jubilado',
    personalidad: 'Muy curioso, quiere entender todo en detalle. Tiende a la hipocondría digital ("doctor Google"). Le gusta hacer preguntas difíciles. Su esposa lo ama pero a veces lo regaña por preocuparse de más. Disfruta la jubilación pero siente que le falta propósito.',
    historiaBreve: 'José trabajó 38 años como contador en una dependencia de gobierno. Se jubiló en enero de 2026 y desde entonces se dedica a leer, hacer crucigramas y, para preocupación de su esposa, investigar síntomas en internet. Este es su primer check-up en casi 10 años — su esposa lo convenció de hacerse un chequeo completo. Le preocupa la salud de su corazón porque su papá falleció de un infarto a los 70 (la misma edad que él tiene ahora).',

    alergiasLista: [],
    condiciones: [
      { nombre: 'Asma bronquial leve intermitente', diagnosticada: '2010', severidad: 'leve', controlada: true,
        notas: 'Crisis < 1 vez al mes. Usa Salbutamol PRN.' },
      { nombre: 'Hipertensión limítrofe (prehipertensión)', diagnosticada: '—', severidad: 'leve', controlada: false,
        ultimoRegistro: 'PA 130-140/85-90 sin fármacos', notas: 'Sin tratamiento aún. En fase de diagnóstico.' },
      { nombre: 'Hipercolesterolemia leve', diagnosticada: '—', severidad: 'leve', controlada: false,
        ultimoRegistro: 'LDL 145, HDL 38, TG 160 mg/dL', notas: 'Primera detección en check-up 2026' },
      { nombre: 'Síndrome de apnea obstructiva del sueño (SAOS) leve', diagnosticada: '2024', severidad: 'leve', controlada: 'parcialmente',
        notas: 'CPAP recetado. Lo usa 3 h/noche (debería ser 7-8 h).' },
      { nombre: 'Ansiedad por salud (hipocondría digital)', diagnosticada: '—', severidad: 'leve', controlada: false,
        notas: 'Automedicado con té de tila. Su esposa reporta que pasa horas investigando en internet.' }
    ],
    medicamentos: [
      { nombre: 'Salbutamol inhalador 100 mcg', dosis: '1-2 inhalaciones', frecuencia: 'según necesidad (PRN)',
        horario: null, via: 'Inhalada', proposito: 'Broncodilatador — crisis asmática', desde: '2010', activo: true,
        indicaciones: 'Usar máximo 4 veces al día. Si necesita más, consultar.', notas: 'Lo usa 1-2 veces al mes' },
      { nombre: 'CPAP (presión positiva continua)', dosis: '8 cmH₂O', frecuencia: 'cada noche',
        horario: 'Al dormir', via: 'Máscara nasal', proposito: 'Apnea del sueño', desde: '2024', activo: true,
        notas: 'Lo usa solo 3 h/noche — refiere que la máscara le incomoda' },
      { nombre: 'Multivitamínico sin receta', dosis: '1 tableta', frecuencia: 'cada 24 horas',
        horario: '9:00', via: 'Oral', proposito: 'Suplemento general', desde: '2025', activo: true,
        notas: 'Comprado por iniciativa propia en farmacia' }
    ],
    cirugias: [],
    hospitalizaciones: [],
    estudios: [
      { nombre: 'Perfil lipídico', resultado: 'LDL 145 mg/dL (elevado), HDL 38 mg/dL (bajo), TG 160 mg/dL', fecha: 'mayo 2026', rangoNormal: 'LDL < 100, HDL > 40, TG < 150', pendiente: false },
      { nombre: 'Electrocardiograma', resultado: 'Normal. Ritmo sinusal. Sin alteraciones.', fecha: 'mayo 2026', pendiente: false },
      { nombre: 'Examen general de orina', resultado: 'Normal', fecha: 'mayo 2026', pendiente: false },
      { nombre: 'Biometría hemática', resultado: 'Hemoglobina 15.2, leucocitos 6.8, plaquetas 245 — normal', fecha: 'mayo 2026', pendiente: false },
      { nombre: 'Glicemia en ayuno', resultado: '96 mg/dL', fecha: 'mayo 2026', rangoNormal: '< 100 mg/dL', pendiente: false },
      { nombre: 'Creatinina sérica', resultado: '0.95 mg/dL', fecha: 'mayo 2026', rangoNormal: '0.6-1.2 mg/dL', pendiente: false },
      { nombre: 'Antígeno prostático específico (PSA)', resultado: 'Pendiente', fecha: 'junio 2026', pendiente: true },
      { nombre: 'Valoración por medicina interna', resultado: 'Pendiente', fecha: 'junio 2026', pendiente: true }
    ],
    familiares: [
      { parentesco: 'Padre', condiciones: ['Infarto agudo de miocardio'], fallecio: true, edadFallecimiento: 70,
        notas: 'José tenía 28 años cuando su papá falleció — evento marcó su vida' },
      { parentesco: 'Madre', condiciones: ['Hipertensión arterial'], fallecio: false, edad: 92 },
      { parentesco: 'Hermana mayor', condiciones: ['Cáncer de mama (superviviente)'], fallecio: false, edad: 73 }
    ],
    citas: [
      { fecha: '26 jun 2026', tipo: 'Check-up anual completo + entrega de resultados', con: 'Dr. Roberto García', lugar: 'Consultorio 3' },
      { fecha: 'Julio 2026', tipo: 'Polisomnografía de control (SAOS)', con: 'Neumología', lugar: 'Laboratorio del Sueño' }
    ],
    signosVitales: {
      peso: '78 kg', talla: '1.75 m', imc: 25.5,
      presion: '132/85', temperatura: '36.5 °C',
      glucosa: '96 mg/dL', frecuenciaCardiaca: '72 lpm',
      spo2: '98 %', fecha: '25 may 2026'
    },
    peso: '78 kg',
    presion: '130/82',
    temperatura: '36.5 °C',
    glucosa: '105 mg/dL',
    adherencia: 96,
    sintomas: [
      'Ningún síntoma agudo — check-up de rutina',
      'Ronquidos nocturnos reportados por su esposa',
      'Somnolencia leve diurna (antes de usar CPAP)'
    ],
    alertas: [
      'PRIMER CHECK-UP EN 10 AÑOS — sin antecedente de estudios de laboratorio recientes',
      'LDL 145 mg/dL y HDL 38 mg/dL — perfil lipídico de riesgo cardiovascular',
      'SAOS leve con mala adherencia a CPAP (3h vs 7-8h recomendadas)',
      'Padre falleció de infarto a los 70 años (edad actual de José) — alto riesgo psicosocial',
      'Tendencia a la hipocondría digital — puede generar ansiedad innecesaria'
    ],
    chats: [
      { role: 'user', text: 'Me siento bien, gracias' },
      { role: 'luz', text: 'Me alegra escuchar eso. ¿Has tenido alguna molestia?' },
      { role: 'user', text: 'Ninguna, todo normal' },
      { role: 'luz', text: 'Excelente. Recuerda que tu próxima cita es el 26 de junio para el check-up.' },
      { role: 'user', text: '¿Me puedes recordar unos días antes?' },
      { role: 'luz', text: 'Claro, te enviaré un recordatorio 3 días antes de tu cita. ¿Sigues usando tu CPAP?' },
      { role: 'user', text: 'Sí, pero me molesta la máscara, solo la aguanto como 3 horas' },
      { role: 'luz', text: 'Es común al principio. Tal vez podamos ajustar la máscara. Coméntaselo al neumólogo en tu próxima cita.' }
    ]
  }
];

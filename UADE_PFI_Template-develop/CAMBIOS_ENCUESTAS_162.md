================================================================================
ESPECIFICACION DE CAMBIOS: ACTUALIZAR ENCUESTAS (48 -> 162 RESPUESTAS)
================================================================================
Para: agente LLM que ejecutara los cambios
Proyecto: tesis InfraEye (repo: IgnacioRodriguezCos/infraeye-web, rama: latex)
Fecha: 14/10/2026

CONTEXTO: El CSV real de la encuesta (Encuestas/New folder/Copy of
Optimizacion de infraestructura cloud (PFI).csv) tiene 162 respuestas (59 con
experiencia, 103 sin). La tesis actualmente declara 48 respuestas (15 con
experiencia). Hay que actualizar la seccion 3.1 y el anexo.

ARCHIVO DE REFERENCIA: preview_encuestas_162.tex contiene el texto nuevo
completo ya compilado y verificado (7 paginas). Usar ese archivo como fuente
para el texto de reemplazo.

================================================================================
CAMBIO 1: REEMPLAZAR LA SECCION 3.1 COMPLETA
================================================================================
Archivo: chapters/chapter03_descripcion.tex
Accion: REEMPLAZAR todo el contenido desde \section{Análisis de los
resultados de la encuesta} hasta (sin incluir) \section{Análisis de
entrevistas}

El texto nuevo esta en: preview_encuestas_162.tex, desde \section{Análisis
de los resultados de la encuesta} hasta (sin incluir) el \chapter del anexo.

NUMEROS QUE CAMBIAN (verificacion rapida):
  Viejo -> Nuevo
  48 respuestas -> 162 respuestas
  15 con experiencia -> 59 con experiencia
  10 con sobrecostos (66,7%) -> 43 con sobrecostos (72,9%)
  27 participantes (monitoreo) -> 88 (recomendaciones costos) y 87 (monitoreo)
  37 de 48 (77,1%) utilidad 4-5 -> 124 de 162 (76,5%)
  12 de 15 (80%) utilidad exp 4-5 -> 46 de 59 (78%)
  3,44 confianza promedio -> 3,41
  50% confianza 4-5 -> 47,5%
  66,7% confianza exp 4-5 -> 55,9%
  24 participantes (seguridad) -> 73 participantes
  "promedio obtenida fue de 4 sobre 5" -> "promedio obtenida fue de 4,06"

FRASE A AJUSTAR: donde dice "Los resultados completos y las respuestas
individuales se presentan en el Anexo correspondiente" cambiar por "Los
resultados agregados se presentan en el Anexo correspondiente; los datos
crudos se encuentran disponibles en el repositorio del proyecto."

================================================================================
CAMBIO 2: REEMPLAZAR EL ANEXO DE ENCUESTAS
================================================================================
Archivo: chapters/appendix/surveys.tex
Accion: REEMPLAZAR todo el contenido del archivo.

Contenido actual: 20 bloques \begin{figure}...\end{figure} con
\includegraphics{Encuestas/N.jpg} (uno por imagen).

Contenido nuevo: el que esta en preview_encuestas_162.tex desde
\chapter{Anexo: Resultados de la Encuesta} hasta \end{document}
(quitando el \end{document}).

ADAPTACIONES para el archivo real del anexo:
  - El \chapter debe ser \anexo{Resultados de la Encuesta} (comando del
    template para anexos, ver chapters/appendix/annex.tex)
  - Las \section deben ser \subsection (los anexos usan subsection)
  - Agregar al inicio del anexo la frase sobre datos crudos:
    "Los datos crudos de la encuesta se encuentran disponibles en el
    repositorio del proyecto."

NOTA: las 20 imagenes Encuestas/*.jpg quedan en el repositorio pero dejan
de referenciarse desde el LaTeX. No hace falta borrarlas.

================================================================================
CAMBIO 3: VERIFICAR QUE NO HAY MAS REFERENCIAS A NUMEROS VIEJOS
================================================================================
Despues de aplicar los cambios 1 y 2, buscar en todos los .tex compilados
(chapter01, chapter02_antecedentes, chapter03_descripcion, conclusion):

  Patrones a buscar: "48 respuestas", "48 participantes", "15 participantes",
  "15 manifestaron", "66,7", "77,1", "3,44", "37 calificaron",
  "12 calificaron", "27 participantes", "20 participantes",
  "24 participantes", "10 participantes"

  Resultado esperado: CERO matches en archivos compilados.
  (El archivo chapters/encuestas.tex es legacy y NO se compila; ignorarlo.)

================================================================================
CAMBIO 4: RECOMPILAR Y VERIFICAR
================================================================================
  1. pdflatex -interaction=nonstopmode main.tex
  2. biber main
  3. pdflatex -interaction=nonstopmode main.tex
  4. pdflatex -interaction=nonstopmode main.tex
  5. Verificar: sin errores, sin referencias sin resolver
  6. Verificar que la seccion 3.1 dice "162 respuestas" y "59 participantes"
  7. Verificar que el anexo muestra las tablas consolidadas (no imagenes)

================================================================================
RESUMEN DE IMPACTO EN LA TESIS
================================================================================
Las conclusiones NO cambian; se refuerzan:
  - Sobrecostos suben de 66,7% a 72,9% (problematica mas extendida)
  - Confianza en automatizacion baja de 50% a 47,5% (validacion humana mas
    justificada)
  - Seguridad sigue siendo el factor #1 (73 menciones)
  - Recomendaciones de costos pasa a ser la funcionalidad mas elegida
    (88 menciones), alineando aun mas con el objetivo de InfraEye
  - La muestra de 162 da mayor validez estadistica que la de 48

Ninguna otra seccion de la tesis cita numeros especificos de la encuesta
(verificado con grep). El FODA, los RF/RNF, la tabla de hallazgos->RF, la
conclusion y el capitulo 1 referencian la encuesta solo cualitativamente.

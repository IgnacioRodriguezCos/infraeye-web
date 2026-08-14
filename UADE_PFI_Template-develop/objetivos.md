# Análisis de Objetivos de la Tesis

## Situación Actual

### Objetivo General Actual
```
Diseñar y desarrollar una plataforma de monitoreo y optimización que permita recolectar 
métricas, logs y trazas de un sistema, detectar anomalías y predecir posibles fallas, 
incorporando una interfaz gráfica para la visualización y análisis de la información.
```

### Objetivos Específicos Actuales
1. Definir la arquitectura del sistema de monitoreo y optimización contemplando la recolección de telemetría en sus tres dimensiones principales: métricas, logs y trazas.
2. Implementar mecanismos de instrumentación sobre una aplicación de prueba que simule un entorno productivo.
3. Desarrollar un módulo de ingesta y almacenamiento de datos que permita centralizar la información recolectada, habilitando su procesamiento y análisis posterior.
4. Implementar un componente de análisis que permita identificar patrones anómalos en el comportamiento del sistema, tales como picos de latencia, errores recurrentes o degradaciones en el rendimiento.
5. Incorporar un modelo de predicción que permita anticipar posibles fallas a partir del comportamiento histórico del sistema.
6. Desarrollar una interfaz gráfica que permita visualizar métricas en tiempo real, explorar logs y trazas, y gestionar alertas generadas por el sistema.
7. Validar el funcionamiento del prototipo mediante pruebas en un entorno controlado, evaluando la capacidad del sistema para detectar anomalías y anticipar fallas.

## Problemas Identificados

### Desalineación con la Introducción
La introducción establece claramente que el proyecto se orienta a:
- Monitoreo y optimización de infraestructura cloud
- Detección de recursos ineficientes mediante Isolation Forest
- Generación de recomendaciones de optimización
- Propuesta de cambios mediante Terraform

Sin embargo, los objetivos actuales se desvían hacia:
- Plataforma de observabilidad completa (métricas, logs, trazas)
- Predicción de fallas
- Análisis de latencia y errores
- Enfoque en AIOps tradicional

### Elementos Problemáticos
1. **"Logs y trazas"**: Desvía el foco hacia observabilidad completa
2. **"Predecir posibles fallas"**: No está alineado con la detección de ineficiencias
3. **"Picos de latencia, errores recurrentes"**: Enfoque en problemas operativos, no en optimización de recursos
4. **"Modelo de predicción de fallas"**: No forma parte del desarrollo concreto
5. **"Explorar logs y trazas"**: Funcionalidad de observabilidad, no de optimización

## Propuesta de Cambios

### Nuevo Objetivo General
```
Diseñar y desarrollar una plataforma de optimización de infraestructura cloud que permita 
detectar recursos ineficientes mediante el algoritmo Isolation Forest, generar 
recomendaciones de optimización orientadas a reducir costos y mejorar la utilización de 
recursos, y proponer cambios de infraestructura mediante código de Terraform.
```

### Nuevos Objetivos Específicos
1. Definir la arquitectura de la plataforma de optimización contemplando la recolección de métricas de consumo y rendimiento de recursos cloud.
2. Implementar mecanismos de recolección de datos sobre infraestructura desplegada en Huawei Cloud que permitan obtener información de utilización de recursos.
3. Desarrollar un módulo de análisis basado en el algoritmo Isolation Forest que permita detectar anomalías en el consumo de recursos, identificando instancias subutilizadas, sobredimensionadas o con patrones de uso ineficientes.
4. Implementar un componente de generación de recomendaciones que, a partir de las anomalías detectadas, proponga acciones concretas de optimización (rightsizing, eliminación de recursos ociosos, ajuste de configuraciones).
5. Desarrollar un módulo de integración con Terraform que permita generar código de infraestructura como código para implementar las recomendaciones de optimización propuestas.
6. Implementar una interfaz gráfica que permita visualizar el estado de la infraestructura, las anomalías detectadas, las recomendaciones generadas y el código Terraform propuesto.
7. Validar el funcionamiento del prototipo mediante pruebas en un entorno controlado, evaluando la capacidad del sistema para detectar ineficiencias y generar recomendaciones efectivas de optimización.

## Alineación con la Línea Propuesta por el Tutor

La nueva estructura de objetivos sigue la línea clara:

**Detección de anomalías/ineficiencias** (Objetivos 1-3)
→ Recolección de métricas de consumo
→ Análisis con Isolation Forest
→ Identificación de recursos ineficientes

**Recomendación** (Objetivos 4-5)
→ Generación de recomendaciones concretas
→ Propuesta de código Terraform

**Optimización de recursos y costos cloud** (Objetivos 6-7)
→ Interfaz para visualizar y accionar
→ Validación de efectividad

## Cambios Eliminados

1. ❌ Eliminar "logs y trazas" del objetivo general
2. ❌ Eliminar "predecir posibles fallas" del objetivo general
3. ❌ Eliminar objetivo de predicción de fallas
4. ❌ Eliminar "picos de latencia, errores recurrentes" del análisis
5. ❌ Eliminar "explorar logs y trazas" de la interfaz
6. ❌ Eliminar "anticipar fallas" de la validación

## Cambios Incorporados

1. ✅ Enfocar en "métricas de consumo y rendimiento"
2. ✅ Específicar "algoritmo Isolation Forest"
3. ✅ Enfocar en "recursos ineficientes, subutilizados, sobredimensionados"
4. ✅ Incorporar "generación de recomendaciones de optimización"
5. ✅ Incorporar "integración con Terraform"
6. ✅ Enfocar validación en "efectividad de optimización"

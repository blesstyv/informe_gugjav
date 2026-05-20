# 04. Comparación de marcos regulatorios aplicables al caso BancoEstado 2020

## Introducción

El ataque informático sufrido por BancoEstado en septiembre de 2020 debe analizarse desde más de un marco regulatorio, porque afectó a una institución bancaria, involucró sistemas informáticos, generó impacto operacional, activó coordinación con autoridades financieras y puso en riesgo la disponibilidad de servicios relevantes para millones de usuarios.

Este archivo compara marcos nacionales e internacionales relacionados con el caso. La comparación considera normas chilenas de delitos informáticos, protección de datos personales, ciberseguridad e instituciones financieras, junto con marcos internacionales estudiados en clase, especialmente GDPR, HIPAA y PCI DSS.

La finalidad de esta comparación es identificar diferencias y similitudes entre los marcos regulatorios, considerando alcance, jurisdicción, sujeto regulado, tipo de dato o activo protegido, sanciones o consecuencias, y aplicabilidad concreta al caso BancoEstado 2020.

---

## Hechos del caso utilizados para la comparación

Según BancoEstado, el incidente fue provocado por terceros, un virus encriptó información de algunos computadores, se bajaron sistemas para proteger las cuentas de los clientes y se vieron afectados sistemas operativos de cerca de 12.000 computadores. El banco también informó que no se afectaron cuentas ni fondos de clientes.

El Banco Central de Chile informó que, frente al incidente reportado por BancoEstado, mantuvo coordinación con la Comisión para el Mercado Financiero, monitoreó la continuidad operacional del banco afectado y observó el funcionamiento de los sistemas de pago de alto valor.

Estos antecedentes permiten comparar marcos regulatorios desde cuatro dimensiones principales:

1. Delitos informáticos.
2. Protección de datos personales.
3. Continuidad operacional y ciberseguridad bancaria.
4. Estándares internacionales de protección de datos y medios de pago.

---

## Tabla comparativa de marcos regulatorios

| Marco regulatorio | Industria o ámbito | Jurisdicción / alcance | Sujeto regulado | Dato, sistema o activo protegido | Sanción o consecuencia | Aplicabilidad al caso BancoEstado 2020 |
|---|---|---|---|---|---|---|
| Ley N° 19.223 sobre delitos informáticos | Delitos informáticos en Chile, vigente al momento del ataque | Chile | Personas que ejecutan conductas informáticas ilícitas | Sistemas de tratamiento de información y datos contenidos en ellos | Penas penales por destruir, inutilizar, interferir, acceder, alterar, dañar o revelar información | Era la ley penal aplicable en 2020. Permitía analizar el sabotaje informático, la obstaculización de sistemas y la alteración de datos, aunque era limitada frente a un ransomware moderno. |
| Ley N° 21.459 sobre delitos informáticos | Delitos informáticos modernos | Chile, alineada con el Convenio de Budapest | Atacantes informáticos y personas naturales o jurídicas vinculadas a ciberdelitos | Sistemas informáticos, datos informáticos, evidencia digital y herramientas de ataque | Penas penales y multas según el delito cometido | Aunque fue posterior al ataque, se usa en este proyecto como marco actual para analizar acceso ilícito, daño a sistemas, daño a datos, fraude informático y abuso de dispositivos. |
| Ley N° 19.628 sobre protección de la vida privada | Protección de datos personales | Chile | Responsables de bancos de datos personales, organismos públicos y privados | Datos personales de personas naturales identificadas o identificables | Responsabilidad civil, acciones del titular y sanciones limitadas según el régimen aplicable | Aplica porque BancoEstado administra datos personales y financieros de clientes. No se confirma públicamente una filtración, pero el incidente generó riesgo sobre la confidencialidad, integridad y disponibilidad de información personal. |
| Normativa CMF sobre seguridad de la información y ciberseguridad bancaria | Sector financiero y bancario | Chile | Bancos e instituciones fiscalizadas por la Comisión para el Mercado Financiero | Continuidad operacional, infraestructura tecnológica, gestión de riesgos y seguridad de la información | Fiscalización, exigencias regulatorias, planes de acción y eventuales sanciones administrativas | Aplica directamente porque BancoEstado es una entidad bancaria. El incidente obligó a coordinar medidas con autoridades y revisar la continuidad operacional del sistema financiero. |
| Ley N° 21.663 Marco de Ciberseguridad | Ciberseguridad nacional, servicios esenciales e infraestructura crítica | Chile | Organismos públicos, prestadores de servicios esenciales y operadores de importancia vital | Servicios esenciales, infraestructura crítica, sistemas y redes relevantes para el país | Obligaciones de gestión de riesgos, reporte de incidentes y sanciones administrativas | Es posterior al caso, pero permite analizar cómo debería tratarse actualmente un incidente similar en banca, servicios financieros y medios de pago, sectores expresamente relevantes para la continuidad del país. |
| Convenio de Budapest sobre ciberdelincuencia | Cooperación internacional contra ciberdelitos | Internacional | Estados parte, autoridades penales y organismos de cooperación | Evidencia digital, sistemas informáticos y persecución transfronteriza del delito | No funciona como sanción directa al atacante, sino como marco de cooperación penal internacional | Es relevante porque los ataques de ransomware suelen tener dimensión transnacional. Permite comprender la necesidad de cooperación internacional para investigar servidores, infraestructura, autores y evidencia digital fuera de Chile. |
| GDPR | Protección de datos personales | Unión Europea, con alcance extraterritorial en ciertos casos | Responsables y encargados que tratan datos de personas ubicadas en la Unión Europea | Datos personales, derechos de los titulares y transferencias internacionales | Multas administrativas que pueden llegar hasta 20 millones de euros o el 4% de la facturación anual global | No se confirma que el caso BancoEstado haya involucrado datos de personas en la Unión Europea. Se utiliza como comparación internacional porque exige notificación de brechas, responsabilidad demostrable y medidas fuertes de protección de datos. |
| HIPAA | Protección de información de salud | Estados Unidos | Entidades cubiertas y socios de negocio que manejan información de salud protegida | PHI y ePHI, es decir, información médica identificable en formato físico o electrónico | Sanciones civiles, medidas correctivas y posibles consecuencias penales en ciertos casos | No aplica directamente al caso BancoEstado porque no se trata de una institución de salud. Se incluye como comparación por industria, para mostrar cómo cambia la regulación cuando el activo protegido son datos de salud. |
| PCI DSS | Seguridad de datos de tarjetas de pago | Global, de naturaleza contractual en la industria de pagos | Comercios, procesadores, emisores, adquirentes y proveedores que almacenan, procesan o transmiten datos de tarjetas | Datos del titular de tarjeta y datos sensibles de autenticación | Consecuencias contractuales, exigencias de cumplimiento, auditorías y posible pérdida de capacidad de procesar tarjetas | Es relevante como estándar técnico porque BancoEstado participa en el ecosistema financiero y de medios de pago. No se afirma que hayan sido comprometidos datos de tarjetas; se usa para evaluar controles de seguridad, monitoreo, segmentación y protección de datos de pago. |

---

## Comparación por ejes principales

| Eje de comparación | Ley 21.459 | Ley 19.628 | Ley 21.663 | GDPR | HIPAA | PCI DSS |
|---|---|---|---|---|---|---|
| Finalidad principal | Sancionar ciberdelitos | Proteger datos personales | Fortalecer la ciberseguridad nacional | Proteger datos personales en la Unión Europea | Proteger información de salud | Proteger datos de tarjetas de pago |
| Tipo de obligación | Penal | Legal y civil | Administrativa y regulatoria | Legal | Legal | Contractual y técnica |
| Sujeto regulado | Atacantes y responsables de delitos informáticos | Responsables de tratamiento de datos | Servicios esenciales y operadores críticos | Responsables y encargados de tratamiento | Entidades cubiertas y socios de negocio | Entidades que almacenan, procesan o transmiten datos de tarjetas |
| Dato o activo protegido | Sistemas y datos informáticos | Datos personales | Servicios esenciales, redes y sistemas críticos | Datos personales | Datos de salud protegidos | Datos de tarjetas |
| Jurisdicción | Chile | Chile | Chile | Unión Europea y alcance extraterritorial | Estados Unidos | Global en la industria de pagos |
| Relación con BancoEstado | Permite tipificar actualmente el ransomware | Evalúa el riesgo sobre datos de clientes | Sirve para analizar continuidad de servicios financieros esenciales | Referencia internacional de privacidad | Comparación con sector salud, no aplicable directamente | Referencia técnica para seguridad de pagos |

---

## Análisis comparativo aplicado al caso

La Ley N° 19.223 era la norma vigente al momento del ataque, pero tenía un alcance limitado frente a ataques modernos como el ransomware. Por esa razón, aunque permitía analizar sabotaje informático y daño a sistemas, no entregaba una estructura tan precisa como la Ley N° 21.459.

La Ley N° 21.459 permite una lectura más actual del caso, porque distingue delitos como ataque a la integridad de sistemas, acceso ilícito, ataque a la integridad de datos, fraude informático y abuso de dispositivos. Esta ley es más adecuada para describir jurídicamente un ataque de ransomware, ya que este tipo de incidente puede afectar simultáneamente sistemas, datos, continuidad operacional y seguridad institucional.

La Ley N° 19.628 se relaciona con el caso porque BancoEstado administra datos personales de millones de clientes. Aunque BancoEstado informó que las cuentas y fondos no fueron afectados, el incidente igual debe analizarse como un riesgo para la seguridad de la información, especialmente en términos de confidencialidad, integridad y disponibilidad.

La normativa de la CMF y la Ley N° 21.663 tienen un enfoque más institucional y preventivo. Mientras la CMF se orienta al control del riesgo tecnológico en entidades financieras, la Ley N° 21.663 permite considerar la banca, los servicios financieros y los medios de pago dentro de una lógica de servicios esenciales o infraestructura relevante para el país.

En cuanto a los marcos internacionales, GDPR funciona como referencia fuerte de protección de datos personales, especialmente por su enfoque de responsabilidad demostrable y notificación de brechas. HIPAA no aplica directamente a BancoEstado, pero permite comparar cómo se regula la protección de datos en el sector salud. PCI DSS es más cercano al caso porque se relaciona con la seguridad de datos de tarjetas y medios de pago, aunque no se debe afirmar que datos de tarjetas hayan sido comprometidos sin evidencia oficial.

---

## Aplicabilidad directa, indirecta y comparativa

| Nivel de aplicabilidad | Marcos incluidos | Justificación |
|---|---|---|
| Aplicabilidad directa al caso | Ley N° 19.223, Ley N° 19.628, normativa CMF | Eran marcos nacionales relevantes al momento del ataque y aplican por tratarse de un banco chileno afectado por un incidente informático. |
| Aplicabilidad actual para análisis académico | Ley N° 21.459 y Ley N° 21.663 | Son posteriores al ataque, pero permiten analizar cómo se abordaría hoy un caso similar bajo el marco moderno chileno. |
| Aplicabilidad internacional o comparativa | Convenio de Budapest, GDPR, HIPAA, PCI DSS | Permiten comparar estándares internacionales sobre ciberdelitos, privacidad, salud y medios de pago. Algunos no aplican directamente al caso, pero ayudan a evaluar buenas prácticas y diferencias regulatorias. |

---

## Conclusión

La comparación de marcos regulatorios demuestra que el ataque a BancoEstado no debe analizarse desde una sola norma. La Ley N° 19.223 permite entender la respuesta penal disponible en 2020, mientras que la Ley N° 21.459 permite una tipificación moderna del ransomware. La Ley N° 19.628 aporta el análisis de datos personales, y la normativa CMF junto con la Ley N° 21.663 permiten comprender el deber de continuidad operacional y ciberseguridad en entidades financieras.

Los marcos internacionales complementan el análisis. El Convenio de Budapest permite abordar la cooperación internacional frente a ciberdelitos; GDPR entrega un estándar avanzado de protección de datos; HIPAA permite comparar el tratamiento de información sensible en salud; y PCI DSS aporta controles técnicos relevantes para la industria de pagos.

En consecuencia, el caso BancoEstado 2020 debe abordarse como un incidente complejo que involucra delitos informáticos, regulación bancaria, gestión de riesgos, protección de datos, continuidad operacional y estándares internacionales de seguridad.

---


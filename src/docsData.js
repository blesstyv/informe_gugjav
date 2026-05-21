export const docs = [
  {
    id: '01_resumen_gugjav',
    filename: '01_resumen_gugjav.md',
    title: 'Resumen ejecutivo del caso',
    content: `# 01. Resumen ejecutivo del caso

## Caso seleccionado
- Fraude informático contra BancoEstado (2024).
- Investigado como un ataque de ransomware con base en acceso no autorizado y manipulación de sistemas internos.

## Qué ocurrió
Durante 2024 se detectó un incidente que afectó a la infraestructura tecnológica de BancoEstado y desvió recursos por aproximadamente $6.100 millones de pesos chilenos.

Las investigaciones preliminares indicaron la posible participación de:
- exfuncionarios,
- proveedores tecnológicos,
- y personas con conocimiento interno de los sistemas bancarios.

A diferencia de un ataque externo tradicional, este caso corresponde a una amenaza interna (“insider threat”), donde se habrían utilizado accesos legítimos y conocimiento operativo para alterar procesos financieros y ejecutar transferencias irregulares.

## Impacto
- Pérdidas económicas millonarias.
- Riesgo reputacional significativo.
- Investigación penal por delitos informáticos y económicos.
- Revisión de controles de ciberseguridad y auditoría interna.
`  },
  {
    id: '02_marco_gugjav',
    filename: '02_marco_gugjav.md',
    title: 'Marco normativo nacional aplicado al caso BancoEstado 2020',
    content: `# 02. Marco normativo nacional aplicado al caso BancoEstado 2020

## 1. Ley N° 21.459 sobre Delitos Informáticos

La ley N° 21.459 es la norma central para analizar este caso, debido a que posteriormente al hackeo a Banco Estado actualizó el marco penal chileno, lo que llevó a derogar la Ley N° 19.223 y adecuó la legislación nacional al Convenio de Budapest sobre ciberdelincuencia. "La Comisión de Economía acordó solicitar al Ejecutivo poner suma urgencia al mensaje en segundo trámite que establece normas sobre delitos informáticos, deroga la ley N° 19.223 y modifica otros cuerpos legales con el objeto de adecuarlos al convenio de Budapest" (Senado de la República de Chile, Jueves 10 de septiembre de 2020).

Se efectúa la Ley N° 21.459 debido a su importancia en este caso, permitiendo analizar conductas como el acceso no autorizado al sistema, cómo afectó el funcionamiento de las plataformas, cifrado de datos, el uso de malware para una finalidad económica obligando a Banco Estado a cerrar mas de 400 sucursales durante el hackeo.

el ransomware provocó indisponibilidad operacional y cifrado de información, por lo que 

## 2. Ley 19.223 Tipifica figuras penales relativas a la informática

Aunque la Ley N°19.223 se encuentra actualmente sin vigencia y derogada por la Ley N° 21.459. En el contexto en el cual ocurrio el ciberataque masivo a Banco Estado se encontraba en vigencia, por lo que se vieron afectados principalmente el art.1 de la Ley 19.223: "El que maliciosamente destruya o inutilice un sistema de tratamiento de información o sus partes o componentes, o impida, obstaculice o modifique su funcionamiento, sufrirá la pena de presidio menor en su grado medio a máximo."(BCN, 07 de junio de 1993). En el caso a Banco Estado, el ransomware habría infringido este árticulo porque el virus encriptó información, afecto sistemas operativos en miles de computadores, lo que concatenó en suspender la atención en sucursales.

## 3. Ley N° 19.628 sobre Protección de la Vida Privada y Datos Personales

BancoEstado comunicó públicamente que las cuentas y fondos de los clientes no habían sido afectados. Sin embargo, la Ley N° 19.628 sigue siendo aplicable porque el incidente involucró sistemas de una entidad que administra bases de datos personales y financieras, por lo que existió un riesgo relevante para la confidencialidad, integridad y disponibilidad de la información. Banco estado priorizó la integridad de los datos, inoperando sistemas para proteger las cuentas de los clientes, viendose afectado los sistemas operativos, impactando a la disponibilidad debido al cierre de sucursales por priorizar los datos de los clientes

BancoEstado administra información personal y financiera de sus clientes; por ello, un ransomware que afecta servidores institucionales genera un riesgo jurídico y técnico sobre la protección de esos datos.


## 4. Normativa de la Comisión para el Mercado Financiero: RAN Capítulo 20-10 sobre Gestión de Seguridad de la Información y Ciberseguridad

En julio de 2020, la CMF publicó normativa para la gestión de seguridad de la información y ciberseguridad aplicable a bancos, filiales bancarias, sociedades de apoyo al giro bancario y emisores u operadores de tarjetas de pago.

El Capítulo 20-10 de la Recopilación Actualizada de Normas establece lineamientos mínimos para que las entidades financieras gestionen adecuadamente los riesgos de seguridad de la información y ciberseguridad. Incluye aspectos como rol del directorio, identificación de activos críticos, gestión de riesgos, detección de amenazas, respuesta ante incidentes, recuperación operacional y protección de la confidencialidad, integridad y disponibilidad de la información.

En el caso BancoEstado, esta normativa es directamente pertinente porque el ataque afectó la continuidad operacional de una institución bancaria. Además, el Banco Central informó que seguiría trabajando junto con la CMF en el monitoreo y refuerzo de procedimientos y medidas de seguridad para enfrentar amenazas de ciberseguridad en entidades del sistema financiero.

el ataque obligó a activar medidas de contingencia, coordinación con autoridades financieras y procesos de recuperación operacional, materias que son precisamente abordadas por la normativa CMF sobre seguridad de la información y ciberseguridad.


## 5. Ley N° 21.663, Ley Marco de Ciberseguridad e Infraestructura Crítica de la Información

La Ley N° 21.663 establece el marco institucional de ciberseguridad en Chile. Su objetivo es regular las acciones de ciberseguridad de los organismos del Estado y su relación con entidades privadas, "Establecer los requisitos mínimos para la prevención, contención, resolución, y respuesta a incidentes de ciberseguridad."(BCN, 08 de abril de 2024).

Aunque esta ley fue publicada después del ataque de BancoEstado, se utiliza como marco vigente porque permite evaluar cómo debería abordarse un incidente similar bajo el marco chileno moderno. La ley crea una institucionalidad especializada, vinculada a la Agencia Nacional de Ciberseguridad, y establece deberes para entidades que puedan prestar servicios esenciales o ser consideradas de importancia vital.

BancoEstado cumple una función crítica dentro del sistema financiero chileno, especialmente por su rol en pagos, cuentas bancarias masivas, beneficios estatales y atención a personas naturales y empresas. Por ello, un ataque de ransomware contra esta institución no solo afecta a una empresa, sino que puede comprometer la continuidad de sus servicios a todo tipo de clientes en el país.

el incidente afectó a un banco estatal con muy alto impacto social y operacional en el país, por lo que bajo el marco actual debería analizarse como un evento de ciberseguridad relevante para la continuidad de servicios financieros esenciales.

## 6. Convenio de Budapest sobre Ciberdelincuencia

El convenio de Budapest sobre ciberdelincuencia entra en el caso cuando en el senado se pide establecer normas sobre delitos informáticos, derogando a la Ley 19.223 y modificando otros cuerpos legales para adecuarlos al convenio de Budapest posterior al ciberataque

Chile es parte del Convenio de Budapest desde 2017, y la Ley N° 21.459 se relaciona directamente con ese marco internacional, porque moderniza los delitos informáticos chilenos y los alinea con estándares internacionales de persecución del ciberdelito.

si los responsables del ransomware operaban fuera de Chile o usaron infraestructura tecnológica internacional, la investigación requeriría cooperación transfronteriza, preservación de evidencia digital y colaboración entre autoridades.`
  },
  {
    id: '03_delitos_gugjav',
    filename: '03_delitos_gugjav.md',
    title: 'Tipificación de delitos informáticos',
    content: `# 03. Tipificación de delitos informáticos según la Ley N° 21.459

## Introducción

Este archivo analiza las conductas asociadas al ataque de ransomware Sodinokibi/REvil contra BancoEstado, aplicando la Ley N° 21.459 sobre delitos informáticos. Aunque el ataque ocurrió en 2020, la evaluación exige mapear las acciones del atacante a la legislación chilena actual, como si los hechos fueran analizados hoy bajo jurisdicción chilena.

## Artículo 2: Acceso ilícito

El acceso ilícito se configura cuando una persona accede sin autorización a un sistema informático, especialmente si vulnera medidas de seguridad.

En el caso BancoEstado, este artículo podría aplicarse si se acredita que los atacantes ingresaron sin autorización a sistemas internos del banco para instalar o ejecutar el ransomware. La conducta relevante sería el ingreso no autorizado a infraestructura tecnológica institucional.

## Artículo 4: Ataque a la integridad de los datos informáticos

El artículo 4 sanciona la alteración, daño o destrucción de datos informáticos sin autorización. En el material de clases se indica que el cifrado de datos mediante ransomware puede relacionarse con este tipo de delito.

En el caso BancoEstado, el ransomware habría afectado la disponibilidad y uso normal de la información, ya que este tipo de malware cifra archivos o impide acceder a ellos. Por ello, el cifrado malicioso puede analizarse como una afectación a la integridad de los datos.

## Artículo 5: Ataque a la integridad de un sistema informático

El artículo 5 sanciona la obstaculización o perturbación del funcionamiento de un sistema informático. Este delito es especialmente relevante cuando el ataque impide la operación normal de servicios o plataformas.

En BancoEstado, el ransomware afectó la continuidad operacional y obligó a restringir la atención en sucursales. Esta conducta puede vincularse con la perturbación del funcionamiento de sistemas informáticos bancarios.

## Artículo 7: Fraude informático

El fraude informático se relaciona con la manipulación de sistemas para obtener un beneficio económico ilícito y causar perjuicio a otro.

En un ataque de ransomware, este artículo podría analizarse si existió exigencia de pago o ánimo de lucro por parte de los atacantes. En este caso, debe redactarse con cuidado: si no se confirma públicamente el pago o exigencia específica de rescate, corresponde señalarlo como una posible figura aplicable al modelo de ataque ransomware, no como un hecho confirmado.

## Artículo 9: Abuso de dispositivos

El artículo 9 se relaciona con herramientas, programas o dispositivos diseñados para cometer delitos informáticos, como malware, exploits o herramientas de ataque.

En el caso BancoEstado, el ransomware Sodinokibi/REvil funcionó como herramienta maliciosa para afectar sistemas y datos. Por ello, el uso, posesión o distribución de este tipo de software puede vincularse con el abuso de dispositivos, siempre que la conducta concreta sea acreditada en la investigación.

## Delitos principales identificados

| Acción del atacante | Artículo Ley N° 21.459 | Justificación |
|---|---|---|
| Ingreso no autorizado a sistemas del banco | Art. 2, acceso ilícito | El ataque habría requerido acceso o ejecución no autorizada dentro de sistemas institucionales. |
| Cifrado de archivos o información | Art. 4, ataque a la integridad de datos | El ransomware altera la disponibilidad y uso normal de los datos. |
| Interrupción o perturbación de servicios internos | Art. 5, ataque a la integridad del sistema | El incidente afectó la operación normal de la institución bancaria. |
| Posible búsqueda de beneficio económico mediante rescate | Art. 7, fraude informático | Aplica si se acredita ánimo de lucro o exigencia de pago. |
| Uso de ransomware como herramienta maliciosa | Art. 9, abuso de dispositivos | El malware es una herramienta diseñada para cometer delitos informáticos. |

## Conclusión

El ataque de ransomware contra BancoEstado puede relacionarse principalmente con acceso ilícito, daño a datos, daño a sistemas y abuso de dispositivos. También podría analizarse el fraude informático si se confirma una finalidad económica directa. La Ley N° 21.459 permite una tipificación mucho más precisa que la antigua Ley N° 19.223, especialmente porque reconoce delitos modernos vinculados al ransomware.`
  },
  {
    id: '04_comparacion_gugjav',
    filename: '04_comparacion_gugjav.md',
    title: 'Comparación de marcos regulatorios',
    content: `# 04. Comparación de marcos regulatorios aplicables

## Introducción

El caso BancoEstado 2020 no puede analizarse desde un solo marco normativo, porque combina delitos informáticos, protección de datos personales, regulación bancaria, continuidad operacional, cooperación internacional y estándares de seguridad en la industria financiera.

La siguiente tabla compara distintos marcos regulatorios nacionales e internacionales aplicables al caso.

## Tabla comparativa de marcos regulatorios

| Marco regulatorio | Alcance | Sujeto regulado | Tipo de obligación o sanción | Aplicabilidad al caso BancoEstado 2020 |
|---|---|---|---|---|
| Ley N° 19.223 | Delitos informáticos vigentes en Chile al momento del ataque | Personas que cometen conductas informáticas ilícitas | Sanciona destrucción, obstaculización, acceso indebido, daño o difusión de datos | Era la norma penal aplicable en 2020, pero resultaba limitada para un ransomware moderno. |
| Ley N° 21.459 | Delitos informáticos modernos en Chile | Atacantes informáticos y quienes cometen ciberdelitos | Tipifica acceso ilícito, interceptación, daño a datos, daño a sistemas, fraude, receptación y abuso de dispositivos | Permite analizar actualmente el ransomware con mayor precisión jurídica. |
| Ley N° 19.628 | Protección de datos personales | Organizaciones que tratan datos personales | Exige tratamiento legítimo, seguridad, finalidad y respeto de derechos ARCO | Aplica porque BancoEstado administra datos personales y financieros de clientes. |
| Normativa CMF | Seguridad de la información y ciberseguridad bancaria | Bancos e instituciones financieras fiscalizadas | Exige gestión de riesgos, continuidad operacional, control interno y respuesta ante incidentes | Aplica directamente porque BancoEstado es una entidad bancaria supervisada. |
| Ley N° 21.663 | Marco institucional de ciberseguridad en Chile | Organismos y entidades vinculadas a servicios esenciales o críticos | Establece deberes de prevención, reporte, gestión de incidentes y coordinación | Sirve para analizar cómo debería gestionarse hoy un incidente similar. |
| Convenio de Budapest | Cooperación internacional contra ciberdelitos | Estados parte y autoridades competentes | Facilita investigación, preservación de evidencia y cooperación entre países | Es relevante porque el ransomware puede involucrar atacantes o servidores en otros países. |
| PCI DSS | Seguridad de datos de tarjetas de pago | Organizaciones que procesan, almacenan o transmiten datos de tarjetas | Exige controles técnicos, monitoreo, segmentación, cifrado y control de acceso | Sirve como estándar de referencia para entidades financieras y medios de pago. |
| GDPR | Protección de datos personales en la Unión Europea | Organizaciones que tratan datos de personas en la UE | Exige consentimiento, minimización, notificación de brechas y fuertes sanciones | Sirve como comparación internacional frente a la Ley N° 19.628 chilena. |

## Comparación resumida

La Ley N° 19.223 era la norma vigente al momento del ataque, pero tenía limitaciones frente al ransomware. La Ley N° 21.459 entrega una respuesta penal más actualizada, porque reconoce delitos específicos como daño a datos, daño a sistemas y abuso de dispositivos.

La Ley N° 19.628 permite analizar la protección de datos personales, aunque no se haya confirmado públicamente una filtración. La normativa CMF se enfoca en la responsabilidad bancaria, continuidad operacional y gestión de riesgos. La Ley N° 21.663 fortalece la institucionalidad de ciberseguridad actual.

A nivel internacional, el Convenio de Budapest permite comprender la persecución de ciberdelitos transfronterizos. PCI DSS entrega buenas prácticas para la protección de sistemas de pago. GDPR sirve como referencia comparativa más exigente en protección de datos.

## Conclusión

La comparación muestra que el caso BancoEstado debe analizarse desde un enfoque integral. No basta con identificar el delito informático: también se deben revisar deberes de seguridad bancaria, tratamiento de datos personales, respuesta ante incidentes y cooperación internacional.`
  },
  {
    id: '05_responsabilidades_gugjav',
    filename: '05_responsabilidades_gugjav.md',
    title: 'Responsabilidades legales de los actores',
    content: `# 05. Responsabilidades legales de los actores

## Introducción

El ataque de ransomware contra BancoEstado involucra distintos actores con roles y responsabilidades diferentes. Para efectos del análisis legal, se deben distinguir responsabilidades penales, civiles y administrativas.

## Actores principales

Los actores identificados en el caso son: los atacantes responsables del ransomware, BancoEstado como institución afectada, organismos reguladores y fiscalizadores, autoridades de persecución penal y posibles terceros tecnológicos o proveedores vinculados a la infraestructura afectada.

## Tabla de responsabilidades

| Actor | Responsabilidad penal | Responsabilidad civil | Responsabilidad administrativa o regulatoria |
|---|---|---|---|
| Atacantes | Podrían responder penalmente por acceso ilícito, daño a datos, daño a sistemas, fraude informático y abuso de dispositivos conforme a la Ley N° 21.459. | Podrían responder por los daños económicos y operacionales causados al banco y a terceros afectados. | No aplica como entidad regulada, pero sí pueden ser objeto de persecución penal nacional o internacional. |
| BancoEstado | En principio, no es autor del delito, sino víctima del ataque. | Podría enfrentar reclamos si se acreditara daño a clientes por fallas en deberes de seguridad o continuidad. | Como banco, debe cumplir exigencias de la CMF sobre seguridad de la información, continuidad operacional y gestión de incidentes. |
| Ejecutivos o responsables internos | No tienen responsabilidad penal automática por el ataque externo, salvo que se acreditara participación, negligencia grave u ocultamiento, lo que no se confirma con la información disponible. | Podrían ser cuestionados si existieran incumplimientos graves en gestión de riesgos o deberes de supervisión. | Tienen deberes de gobierno corporativo, gestión de riesgos tecnológicos y cumplimiento normativo. |
| Proveedores tecnológicos | Podrían tener responsabilidad penal solo si participaron en la conducta ilícita, lo que no puede afirmarse sin evidencia. | Podrían responder contractualmente si existieron fallas en servicios, soporte, seguridad o continuidad comprometida. | Pueden estar sujetos a exigencias contractuales, auditorías y deberes de seguridad acordados con la entidad bancaria. |
| CMF y autoridades regulatorias | No cometen delito; su rol no es ejecutar sistemas del banco, sino fiscalizar. | No tienen responsabilidad civil directa por el ataque. | Deben supervisar, exigir reportes, revisar medidas de seguridad y coordinar acciones dentro de sus competencias. |
| Ministerio Público y policías | No tienen responsabilidad por el ataque. | No aplica. | Tienen responsabilidad institucional de investigar, preservar evidencia digital y perseguir penalmente a los responsables. |

## Análisis de responsabilidades

La responsabilidad principal recae en los atacantes, porque son quienes habrían ejecutado el ransomware y afectado sistemas de una entidad bancaria. Su conducta puede analizarse penalmente conforme a la Ley N° 21.459.

BancoEstado debe ser analizado desde otra perspectiva. No corresponde tratarlo como infractor penal por el solo hecho de haber sido víctima. Sin embargo, como institución financiera, sí tiene deberes de prevención, seguridad de la información, continuidad operacional, protección de datos y respuesta ante incidentes.

Los reguladores, como la CMF, cumplen un rol de fiscalización y supervisión. Su responsabilidad se vincula con exigir medidas, recibir reportes y monitorear que las entidades financieras cumplan estándares adecuados de seguridad.

## Conclusión

El caso demuestra que un incidente de ransomware no genera un solo tipo de responsabilidad. Los atacantes enfrentan responsabilidad penal; BancoEstado puede ser evaluado por sus deberes civiles, regulatorios y de seguridad; los proveedores pueden tener responsabilidad contractual; y las autoridades deben cumplir funciones de investigación, fiscalización y coordinación.`
  },
  {
    id: '06_datos_gugjav',
    filename: '06_datos_gugjav.md',
    title: 'Tratamiento de datos personales según la Ley N° 19.628',
    content: `# 06. Tratamiento de datos personales según la Ley N° 19.628

## Introducción

BancoEstado administra grandes volúmenes de información asociada a clientes, trabajadores, operaciones financieras y servicios bancarios. Por ello, el ataque de ransomware de 2020 debe analizarse también desde la protección de datos personales conforme a la Ley N° 19.628.

## Precisión sobre filtración de datos

Con la información pública disponible para este análisis, no se debe afirmar que existió una filtración confirmada de datos personales de clientes. Sin embargo, el ataque sí generó un riesgo relevante para la confidencialidad, integridad y disponibilidad de la información tratada por el banco.

## Tipos de datos involucrados o expuestos a riesgo

| Tipo de dato | Clasificación | Ejemplo | Riesgo asociado |
|---|---|---|---|
| Datos de identificación | Dato personal | Nombre, RUT, número de cliente | Suplantación de identidad o uso indebido. |
| Datos de contacto | Dato personal | Teléfono, correo electrónico, dirección | Fraudes, phishing o contacto malicioso. |
| Datos financieros | Dato personal de alta sensibilidad práctica | Cuentas, productos bancarios, movimientos, créditos | Riesgo patrimonial y afectación de confianza. |
| Datos transaccionales | Dato personal asociado a actividad financiera | Registros de transferencias, pagos o movimientos | Perfilamiento o exposición de hábitos financieros. |
| Credenciales o accesos | Información crítica de seguridad | Usuario, claves, tokens o mecanismos de autenticación | Acceso no autorizado a servicios. |

## Datos personales y datos sensibles

La Ley N° 19.628 distingue entre datos personales y datos sensibles. Los datos personales son aquellos relativos a personas naturales identificadas o identificables. En el caso de BancoEstado, nombres, RUT, correos, teléfonos y datos financieros asociados a clientes corresponden a datos personales.

Los datos sensibles son aquellos relacionados con aspectos más íntimos de la persona, como salud, creencias, vida sexual, origen racial u opiniones políticas. En este caso, no se puede afirmar que el ransomware haya comprometido datos sensibles, salvo que una investigación confirmara que existían bases de datos de esa naturaleza afectadas.

## Derechos ARCO

Los derechos ARCO corresponden a acceso, rectificación, cancelación y oposición. Estos derechos permiten que el titular tenga control sobre sus datos personales.

| Derecho ARCO | Aplicación al caso |
|---|---|
| Acceso | Los clientes podrían requerir información sobre qué datos personales mantiene el banco y si estos fueron afectados por el incidente. |
| Rectificación | Si producto del incidente existieran datos alterados o inconsistentes, el titular podría solicitar su corrección. |
| Cancelación | Si ciertos datos ya no fueran necesarios o se estuvieran tratando de forma indebida, el titular podría solicitar su eliminación cuando corresponda legalmente. |
| Oposición | El titular podría oponerse a ciertos tratamientos de datos no necesarios, especialmente aquellos no vinculados directamente con la prestación del servicio bancario. |

## Medidas de seguridad recomendadas

Para proteger los datos personales, BancoEstado y cualquier entidad financiera deberían aplicar controles como cifrado de datos, respaldos seguros, segmentación de redes, autenticación multifactor, monitoreo de accesos, gestión de privilegios, registros de auditoría y planes de respuesta ante incidentes.

## Conclusión

Aunque no se confirme una filtración pública de datos personales, el ataque de ransomware representó un riesgo importante para la seguridad de la información. La Ley N° 19.628 permite analizar el deber de proteger los datos personales tratados por BancoEstado y la importancia de respetar los derechos ARCO de los titulares.
`  },
  {
    id: '07_conclusiones_gugjav',
    filename: '07_conclusiones_gugjav.md',
    title: 'Conclusiones y recomendaciones finales',
    content: `# 07. Conclusiones y recomendaciones finales

## Conclusión general

El ataque de ransomware Sodinokibi/REvil contra BancoEstado en 2020 demuestra que la ciberseguridad bancaria no puede entenderse solo como un problema técnico. También es un asunto legal, regulatorio, operativo y social, especialmente cuando afecta a una institución financiera estatal con alto número de usuarios.

## Conclusiones del análisis legal

La Ley N° 19.223 era la norma vigente al momento del ataque, pero resultaba insuficiente para abordar con precisión un ransomware moderno. Su estructura general dificultaba tipificar conductas específicas como cifrado malicioso de datos, uso de malware, afectación de sistemas críticos y posible finalidad económica.

La Ley N° 21.459 representa un avance porque permite analizar el caso mediante figuras más claras, como acceso ilícito, daño a datos, daño a sistemas, fraude informático y abuso de dispositivos.

La Ley N° 19.628 es relevante porque BancoEstado trata datos personales y financieros de clientes. Aunque no se confirme una filtración pública, el incidente generó riesgo para la confidencialidad, integridad y disponibilidad de información personal.

La regulación bancaria y la normativa de la CMF son fundamentales porque una entidad financiera debe gestionar riesgos tecnológicos, mantener continuidad operacional y proteger la confianza de los usuarios.

## Recomendaciones de seguridad

Se recomienda fortalecer la segmentación de redes para evitar que un malware se propague dentro de la institución. También es necesario mantener respaldos seguros, desconectados o protegidos, que permitan recuperar información sin depender del pago de rescates.

Otra medida clave es aplicar autenticación multifactor en accesos críticos, controlar privilegios administrativos y monitorear actividades anómalas dentro de la red.

Además, se debe reforzar la capacitación de trabajadores frente a phishing, archivos maliciosos y técnicas de ingeniería social, ya que muchos ataques de ransomware comienzan mediante errores humanos o credenciales comprometidas.

## Recomendaciones legales y organizacionales

La institución debe contar con planes formales de respuesta ante incidentes, protocolos de comunicación con autoridades, mecanismos de notificación interna, gestión de evidencia digital y procedimientos de continuidad operacional.

También debe existir coordinación con organismos como CMF, CSIRT, Ministerio Público y policías especializadas, especialmente si el incidente tiene características transnacionales.

## Reflexión final

El caso BancoEstado evidencia la necesidad de integrar seguridad técnica, cumplimiento normativo y responsabilidad institucional. La ciberseguridad no depende solo de herramientas, sino también de prevención, gestión de riesgos, cultura organizacional, normativa actualizada y cooperación entre actores públicos y privados.`
  },
  {
    id: '08_prompts_gugjav',
    filename: '08_prompts_gugjav.md',
    title: 'Bitácora de uso de IA y prompts',
    content: `# Bitácora de uso de IA y Prompts utilizados en el informe:

## Prompt 1:
Actúa como un experto en ciberseguridad y análisis de incidentes informáticos. Necesito un informe detallado y estructurado sobre el ciberataque de ransomware que sufrió el BancoEstado de Chile en septiembre de 2020. 

1. **Contexto y Cronología:** ¿Cuándo se detectó, cómo evolucionó el ataque y qué variantes de ransomware estuvieron involucradas (por ejemplo, Sodinokibi/REvil)?
2. **Vector de Ataque Técnico:** ¿Cómo lograron ingresar a los sistemas del banco? (Si fue a través de phishing, una vulnerabilidad en un software de terceros o una campaña maliciosa previa).
3. **Impacto Operativo y de Negocios:** ¿Qué servicios se vieron afectados (sucursales, canales digitales, cajeros automáticos) y cuánto tiempo tomó la recuperación? Aclara si los fondos de los clientes se vieron comprometidos.
4. **Respuesta al Incidente y Mitigación:** ¿Qué medidas de contención inmediatas tomó el banco (aislamiento de sistemas, apagado de plataformas) y cómo colaboraron con el CSIRT de Chile?
5. **Lecciones Aprendidas:** ¿Qué cambió en el panorama de la ciberseguridad bancaria en Chile tras este evento y qué buenas prácticas se extraen de este caso?

Evita tecnicismos excesivos sin explicar, pero mantén un nivel de detalle técnico profesional.`
  },
]

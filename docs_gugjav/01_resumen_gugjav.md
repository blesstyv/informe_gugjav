# Resumen ejecutivo del caso BancoEstado 2020

## Identificación del caso

En este informe se analiza el ciberataque sufrido por Banco Estado en septiembre de 2020, identificado como un ataque de ransomware Sodinokibi/REvil. Desde el mismo informe que presentó Banco Estado, describió el incidente como un ataque informático provocado por terceros, mediante un virus que encriptó información de al menos 12.000 computadores del banco.

## Qué ocurrió

El 7 de septiembre de 2020, Banco Estado informó públicamente que presentaría una querella por sabotaje informático contra quienes resultaran responsables del ataque sufrido por la institución. La entidad señaló que el incidente fue provocado por terceros y que afectó la atención normal en sucursales.

Según la información oficial entregada por Banco Estado, el incidente consistió en un virus que encriptó información de sus computadores. Como medida de protección, el banco bajó sistemas para proteger las cuentas de sus clientes. La institución indicó que lo afectado fueron principalmente sistemas operativos, lo que impactó la atención presencial en sucursales.

El banco comunicó además que las cuentas y fondos de los clientes no fueron afectados. Posteriormente, en una sesión de la Comisión de Economía del Senado, representantes de Banco Estado señalaron que hasta ese momento no se había registrado robo de información ni de fondos, ni se había solicitado rescate. También se indicó que se generó un comité de crisis y que se contactó a la CMF, Asociación de Bancos, SERNAC, PDI y Microsoft.

## Actores identificados

En el análisis del caso se identifican los siguientes actores principales:

| Actor                                             | Rol en el caso                                                                                                                                                                         |
| ------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Atacantes o terceros responsables                 | Sujetos que ejecutaron el ransomware contra sistemas de Banco Estado.                                                                                                                  |
| Banco Estado                                      | Institución financiera afectada, víctima del ataque y responsable de activar medidas de protección, continuidad y respuesta.                                                           |
| Clientes y usuarios                               | Personas potencialmente afectadas por la interrupción de servicios, cierre de sucursales y preocupación por sus cuentas y datos.                                                       |
| Directorio, ejecutivos y responsables internos    | Encargados de la gestión institucional, gobierno corporativo, respuesta ante incidentes y continuidad operacional.                                                                     |
| Proveedores tecnológicos o terceros contratistas  | Posibles actores relevantes en soporte, infraestructura, servicios tecnológicos o medidas de recuperación, sin que se pueda atribuir responsabilidad específica sin evidencia oficial. |
| Comisión para el Mercado Financiero (CMF)         | Organismo supervisor del sistema bancario, relevante en materia de fiscalización, seguridad de la información y continuidad operacional.                                               |
| Banco Central de Chile                            | Institución que monitoreó sistemas de pago de alto valor y coordinó acciones con la CMF.                                                                                               |
| Ministerio Público, PDI y autoridades competentes | Instituciones llamadas a investigar los hechos, preservar evidencia digital e identificar responsables.                                                                                |

## Impacto del incidente

El incidente generó preocupación pública porque Banco Estado presta servicios financieros a millones de personas. La eventual afectación de sistemas bancarios puede repercutir en atención presencial, operaciones digitales, continuidad de servicios, confianza de los usuarios y coordinación con autoridades financieras.

Desde la perspectiva de seguridad de la información, el caso afectó especialmente la disponibilidad de sistemas y generó riesgos sobre la integridad y confidencialidad de la información. No obstante, con la información oficial disponible, no se puede afirmar que se hayan filtrado los datos de los clientes, ni robo de fondos.

## Marco normativo general aplicado al caso

El caso se analiza desde un marco normativo nacional e internacional amplio, porque involucra delitos informáticos, protección de datos personales, regulación bancaria, continuidad operacional y cooperación internacional.

La Ley N° 19.223 era la norma penal informática vigente en Chile al momento del ataque de 2020. Permitía analizar conductas como destrucción, inutilización, obstaculización de sistemas, acceso indebido y daño de datos. Sin embargo, esta ley resultaba limitada frente a fenómenos modernos como el ransomware, porque fue dictada en 1993 y no contemplaba figuras como malware, abuso de dispositivos, ransomware, fraude informático moderno o cooperación internacional avanzada.

La Ley N° 21.459, aunque posterior al ataque, se utiliza como marco actual de análisis porque modernizó la legislación chilena en delitos informáticos y permite tipificar de mejor manera conductas asociadas al ransomware, como acceso ilícito, ataque a la integridad de sistemas, ataque a la integridad de datos, fraude informático y abuso de dispositivos.

La Ley N° 19.628 sobre protección de la vida privada se aplica porque BancoEstado trata datos personales y financieros de clientes, trabajadores y usuarios. Aunque no se confirme una filtración de datos personales, el incidente generó riesgo sobre información que debe ser protegida con debida diligencia.

También se consideran la normativa de la Comisión para el Mercado Financiero sobre gestión de seguridad de la información y ciberseguridad bancaria, la Ley N° 21.663 como marco actual de ciberseguridad y servicios esenciales, el Convenio de Budapest por su importancia en la cooperación internacional contra ciberdelitos, y PCI DSS como estándar técnico de referencia para entidades vinculadas al ecosistema de pagos.

## Delitos informáticos analizados

Los delitos informáticos más relevantes son:

| Conducta asociada al caso                          | Figura legal analizada                                                                                                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ingreso no autorizado a sistemas del banco         | Acceso ilícito, ya que Banco Estado aseguró que fueron terceros los que encriptaron información afirmando haber sido un ataque.                                                     |
| Cifrado o alteración de información                | Ataque a la integridad de datos informáticos, porque el ransomware puede alterar o impedir el uso normal de datos.                                                  |
| Interrupción del funcionamiento normal de sistemas | Ataque a la integridad de un sistema informático, por la afectación de sistemas operativos y atención institucional.                                                |
| Uso de malware o herramientas maliciosas           | Abuso de dispositivos, por la utilización de programas creados o adaptados para cometer delitos informáticos.                                                       |
| Eventual finalidad económica del ransomware        | Fraude informático, aunque no pudo realizarse debido a la rápida gestión de inconvenientes de Banco Estado, el grupo REvil es conocido por cometer fraudes informáticos para su eventual pago de rescate.

## Comparación de marcos regulatorios

La comparación realizada en el informe demuestra que el caso Banco Estado 2020 debe analizarse desde distintas industrias y marcos regulatorios.

Desde la dimensión penal, se comparan la Ley N° 19.223 y la Ley N° 21.459. La primera era la norma vigente al momento del ataque, pero era limitada frente al ransomware moderno. La segunda entrega una tipificación más precisa y actualizada.

Desde la protección de datos, se considera la Ley N° 19.628 y se compara con marcos internacionales como GDPR. La Ley chilena permite analizar datos personales, derechos ARCO y deber de diligencia, mientras que GDPR sirve como referencia internacional más exigente en privacidad, notificación de brechas y responsabilidad demostrable.

Desde la industria financiera, se considera la normativa de la CMF y PCI DSS. La normativa CMF se vincula directamente con la seguridad de la información, continuidad operacional y gestión de riesgos en bancos. PCI DSS se utiliza como estándar técnico de referencia para entidades relacionadas con medios de pago, sin afirmar que se hayan comprometido datos de tarjetas.

## Responsabilidades legales de los actores

La responsabilidad penal principal recae en los atacantes o terceros responsables del ransomware. Ellos podrían responder por conductas como acceso ilícito, afectación de sistemas, daño a datos, uso de malware y eventual fraude informático.

Banco Estado debe analizarse principalmente como víctima del ataque. No como autor del delito informático por el solo hecho de haber sido afectado. Sin embargo, como entidad bancaria y responsable de datos personales, tiene deberes de seguridad, continuidad operacional, diligencia, gestión de riesgos y protección de la información.

Los directivos y responsables internos no tienen responsabilidad penal automática por ocupar cargos dentro de la institución. Su responsabilidad debe analizarse desde los deberes de dirección, supervisión, control interno y gestión de riesgos. Solo podría atribuirse una responsabilidad más grave si se acreditaran hechos concretos como participación, encubrimiento, negligencia grave o incumplimiento normativo.

La CMF, el Banco Central, el Ministerio Público y la PDI cumplen roles institucionales de fiscalización, monitoreo, coordinación, investigación y persecución penal. No son responsables del ataque, pero sí forman parte del sistema de respuesta frente a incidentes relevantes para el sistema financiero.

## Tratamiento de datos personales

El caso también se analiza conforme a la Ley N° 19.628, porque Banco Estado administra datos personales y financieros de clientes. Entre los datos potencialmente expuestos a riesgo se encuentran datos de identificación, datos de contacto, datos financieros, datos transaccionales y datos internos asociados a trabajadores o sistemas.

Es importante distinguir entre datos personales y datos sensibles. Los datos de identificación, contacto, cuentas bancarias, productos financieros y registros transaccionales son datos personales porque pueden vincularse a personas naturales identificadas o identificables. En cambio, los datos sensibles, según la Ley N° 19.628, se relacionan con características físicas o morales, vida privada, salud, creencias, opiniones políticas, origen racial, orientación sexual u otros aspectos.

Respecto de los derechos ARCO, el incidente se relaciona principalmente con el derecho de acceso, rectificación y cancelación. El derecho de acceso es relevante porque los titulares pueden requerir información sobre qué datos mantiene el banco. La rectificación sería importante si un incidente afectara la exactitud o integridad de registros. La cancelación se relaciona con el deber de no conservar datos innecesarios. La oposición tiene una relación más indirecta con el caso, aunque sigue siendo parte del control que los titulares tienen sobre ciertos tratamientos de sus datos.
# 🚀 CONFIGURACIÓN PARA GOOGLE ADS - JESÚS GONZÁLEZ

## 📋 **PASOS OBLIGATORIOS PARA PONER LA LANDING EN GOOGLE ADS**

### **1. CONFIGURAR GOOGLE ADS**

1. **Crear cuenta en Google Ads**: https://ads.google.com
2. **Crear conversión**:
   - Ve a "Herramientas y configuración" > "Conversiones"
   - Crear nueva conversión tipo "Website"
   - Nombre: "Contacto WhatsApp"
   - Valor: 1 (o el valor promedio de un cliente)
   - Obtén el **ID de conversión** (AW-XXXXXXXXX)

3. **Actualizar IDs en el código**:
   - Archivo: `src/lib/tracking.ts`
   - Reemplazar `AW-CONVERSION_ID` con tu ID real
   - Reemplazar `CONVERSION_LABEL` con tu label real

### **2. CONFIGURAR GOOGLE ANALYTICS**

1. **Crear propiedad**: https://analytics.google.com
2. **Obtener ID de seguimiento** (GA-XXXXXXXXX)
3. **Actualizar en**:
   - `src/app.html` línea 65: reemplaza `GA_TRACKING_ID`
   - `src/lib/tracking.ts`: actualiza `GOOGLE_ANALYTICS_ID`

### **3. CONFIGURAR FACEBOOK PIXEL (OPCIONAL)**

1. **Crear Pixel**: https://business.facebook.com
2. **Obtener Pixel ID**
3. **Actualizar**:
   - `src/app.html` línea 77: reemplaza `PIXEL_ID`
   - `src/lib/tracking.ts`: actualiza `FACEBOOK_PIXEL_ID`

---

## 🎯 **PALABRAS CLAVE RECOMENDADAS PARA GOOGLE ADS**

### **Palabras Principales:**
- acordeonista profesional
- acordeonista para eventos
- show vallenato
- música vallenata en vivo
- acordeonista bogotá
- parranda vallenata
- música para bodas
- espectáculo vallenato

### **Palabras Long-tail:**
- contratar acordeonista para boda
- show de vallenato para empresa
- parranda vallenata para cumpleaños
- acordeonista profesional Colombia
- música en vivo para eventos

---

## 💰 **CONFIGURACIÓN DE CAMPAÑA SUGERIDA**

### **Tipo de Campaña**: Búsqueda
### **Presupuesto Diario**: $50,000 - $150,000 COP
### **Ubicaciones**: 
- Bogotá y alrededores
- Medellín
- Cali
- Barranquilla
- Cartagena

### **Grupos de Anuncios**:

**1. Acordeonista Profesional**
- Palabras: acordeonista profesional, acordeonista Colombia
- CPC Max: $3,000 COP

**2. Eventos y Bodas**  
- Palabras: música para bodas, acordeonista para eventos
- CPC Max: $4,000 COP

**3. Vallenato y Parranda**
- Palabras: show vallenato, parranda vallenata
- CPC Max: $2,500 COP

---

## 📝 **TEXTOS DE ANUNCIOS SUGERIDOS**

### **Anuncio 1:**
**Título 1**: Acordeonista Profesional | +10 Años
**Título 2**: Shows Vallenatos Para Tu Evento
**Descripción**: Contrata al mejor acordeonista de Colombia. Shows profesionales para bodas, cumpleaños y eventos corporativos. ¡Cotiza gratis!

### **Anuncio 2:**
**Título 1**: Parranda Vallenata Profesional
**Título 2**: Jesús González | 100% Satisfacción
**Descripción**: Haz de tu evento una experiencia inolvidable. Acordeonista con +100 eventos realizados. Repertorio personalizado. ¡Reserva ya!

---

## 🔥 **EXTENSIONES RECOMENDADAS**

### **Enlaces de Sitio**:
- Shows Disponibles
- Ver Videos
- Contacto WhatsApp
- Galería de Fotos

### **Extensiones de Llamada**:
- WhatsApp: +57 314 409 6187

### **Extensiones de Texto**:
- "+10 Años de Experiencia"
- "100% Clientes Satisfechos" 
- "Repertorio Personalizado"
- "Atención Inmediata por WhatsApp"

---

## 📊 **MÉTRICAS A MONITOREAR**

### **Conversiones Principales**:
1. **Clics a WhatsApp** (desde modal)
2. **Clics en banner de urgencia**  
3. **Clics en botón flotante de WhatsApp**
4. **Tiempo en página** (mín 2 minutos)

### **KPIs Objetivo**:
- **CTR**: > 3%
- **Tasa de conversión**: > 5%
- **Costo por conversión**: < $15,000 COP
- **Quality Score**: > 7/10

---

## 🚨 **ACCIONES INMEDIATAS**

### **ANTES DE LANZAR:**

1. **✅ Reemplazar todos los IDs de tracking**
2. **✅ Verificar que funcionen las conversiones**
3. **✅ Conectar Google Analytics**
4. **✅ Configurar audiencias de remarketing**
5. **✅ Crear audiences similares**
6. **✅ Configurar exclusiones geográficas**

### **PARA TESTING:**
```bash
# Ejecutar en desarrollo
npm run dev

# Abrir: http://localhost:5173
# Probar todos los botones de conversión
# Verificar que se disparen los eventos en:
# - Google Analytics (Real Time)
# - Facebook Events Manager
```

---

## 📱 **PRÓXIMOS PASOS RECOMENDADOS**

### **Semana 1:**
- Lanzar campaña con presupuesto bajo ($30k/día)
- Monitorear métricas diariamente
- Ajustar pujas según rendimiento

### **Semana 2-3:**
- Optimizar anuncios con mejor CTR
- Agregar palabras negativas
- Aumentar presupuesto en grupos exitosos

### **Mes 1:**
- Crear campaigns de remarketing
- Implementar audiences similares
- Expandir a nuevas ubicaciones

---

## 💪 **¡LISTO PARA DOMINAR GOOGLE ADS!**

Con esta configuración tendrás:
- ✅ Tracking completo de conversiones
- ✅ Landing optimizada para conversión  
- ✅ Estructura de campaigns profesional
- ✅ Métricas precisas para optimización

**¡Tu negocio musical está listo para escalar! 🎵💰** 

- **Página de Aterrizaje:** `https://jesusgonzalez.com.co`
- **Contacto Principal:**
  - **Nombre:** Jesús González
  - **Rol:** Manager y Director Musical
  - **Email:** `contacto@jesusgonzalez.com.co`
  - **WhatsApp:** `+57 314 409 6187`

#### Propuesta de Valor

- **Título Principal:** "La Agrupación Vallenata Revelación 2025 para Eventos de Lujo" 
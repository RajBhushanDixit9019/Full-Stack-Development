# Dark Theme UI Component Assignments & Font Styles
(Using Monochromatic Purple Palette)

---

### 1. Page Section & Text

* **Page Background:** `#161320` (Purple-Black)
* **Primary Text (Headlines):** `#F0EDFF` (Light Lavender)
* **Secondary Text (Paragraphs):** `#F0EDFF` (Light Lavender)
* **Muted Text (e.g., timestamps, footers):** `#F0EDFF` with `opacity: 0.7;`

---

### 2. Hero Section

* **Hero Background:** `#161320` (Purple-Black) (Inherits from page)
* **Hero Headline (e.g., "Hi, I'm..."):** `#F0EDFF` (Light Lavender)
* **Hero Subtext (e.g., "A Full-Stack Developer..."):** `#F0EDFF` with `opacity: 0.8;`
* **Hero CTA Button (e.g., "View My Work"):** Use the **Primary Button** style.
    * **Background:** `#A78BFA` (Bright Lavender)
    * **Text:** `#37306B` (Action Text)
    * **Hover Background:** `#C4B5FD` (Brightest Lavender)

---

### 3. Navbar

* **Navbar Background:** `#211D33` (Dark Violet)
* **Logo / Brand Text:** `#F0EDFF` (Light Lavender)
* **Nav Links (Default):** `#F0EDFF` (Light Lavender) with `opacity: 0.8;`
* **Nav Links (Hover):** `#A78BFA` (Bright Lavender)
* **Nav Links (Active/Current Page):** `#A78BFA` (Bright Lavender)

---

### 4. Links

* **Standard Link:** `#A78BFA` (Bright Lavender)
* **Link Hover:** `#C4B5FD` (Brightest Lavender), with `text-decoration: underline;`

---

### 5. Buttons

* **Primary Button (e.g., "Contact Me")**
    * **Background:** `#A78BFA` (Bright Lavender)
    * **Text:** `#37306B` (Action Text)
    * **Hover Background:** `#C4B5FD` (Brightest Lavender)
* **Secondary Button (e.g., "Learn More")**
    * **Background:** `transparent`
    * **Text:** `#A78BFA` (Bright Lavender)
    * **Border:** `1px solid #A78BFA`
    * **Hover Background:** `rgba(167, 139, 250, 0.1)` (A transparent fill)

---

### 6. Cards & Items

* **Card Background:** `#211D33` (Dark Violet)
* **Card Title (Item Title):** `#F0EDFF` (Light Lavender)
* **Card Description (Item Text):** `#F0EDFF` (Light Lavender) with `opacity: 0.8;`
* **Card "Read More" Link:** `#A78BFA` (Bright Lavender)
* **Tags/Categories (Item Tag):**
    * **Background:** `rgba(167, 139, 250, 0.1)` (Transparent action color)
    * **Text:** `#A78BFA` (Bright Lavender)

---

### 7. Font Styles

The recommended font is **Inter**, a clean, variable sans-serif font perfect for modern UI design.

#### Font Hierarchy

| Role | Font | Weight | Size (Example) | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Headline** | Inter | **Bold (700)** | `3rem` (48px) | Large, strong, and attention-grabbing. |
| **Section Headings** | Inter | **SemiBold (600)** | `2rem` (32px) | Clearly marks a new section. |
| **Card Titles** | Inter | **Medium (500)** | `1.25rem` (20px) | Strong, but not as heavy as a headline. |
| **Body Text (Paragraphs)**| Inter | **Regular (400)** | `1rem` (16px) | Highly readable. Set line-height to `1.6`. |
| **Navbar Links** | Inter | **Medium (500)** | `1rem` (16px) | Slightly stronger than body text. |
| **Buttons / Tags** | Inter | **Medium (500)** | `0.875rem` (14px) | Slightly smaller, but bold and clear. |

#### CSS Implementation

**1. Import the Font (in your CSS file):**
```css
@import url('[https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap)');


```
### 8. Contact Us Form

This section defines the specific styles for the contact form elements.

*   **Form Container**:
    *   **Background**: `#211D33` (Matches Card Background)
    *   **Padding**: `2rem`
    *   **Border Radius**: `12px`
*   **Labels**:
    *   **Color**: `#F0EDFF` (Light Lavender)
    *   **Weight**: `Medium (500)`
    *   **Margin**: `0 0 0.5rem 0`
*   **Input Fields & Textarea**:
    *   **Background**: `#1211D33` (Matches Page Background for depth)
    *   **Text Color**: `#F0EDFF` (Light Lavender)
    *   **Border**: `1px solid #37306B` (Deep Violet)
    *   **Focus Border**: `#A78BFA` (Bright Lavender)
    *   **Focus Shadow**: `0 0 0 3px rgba(167, 139, 250, 0.2)`
*   **Submit Button**:
    *   Uses the **Primary Button** style (see Section 5).
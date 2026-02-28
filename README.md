# 💰 B2N – Gross to Net Salary Calculator (LT 2026)

A simple JavaScript project that calculates **net salary (į rankas)** from **gross salary (ant popieriaus)** based on Lithuania’s 2026 tax system.

This project demonstrates real-world tax logic using plain JavaScript and focuses on financial calculations, conditional statements, and DOM manipulation.

---

## 🚀 Features

- 📊 Converts **Gross → Net salary**
- 🧾 Applies **2026 NPD (Non-Taxable Income) formula**
- 📈 Progressive **GPM tax rates**:
  - 20%
  - 25%
  - 32%
- 🪙 Calculates:
  - **VSD (12.52%)**
  - **PSD (6.98%)**
- 📌 Displays applied tax rate
- 🧠 Handles user input and updates DOM dynamically

---

## 🧮 Tax Logic (Lithuania 2026)

### 📌 NPD Formula
NPD = 747 − 0.49 × (gross − 1153)

### Rules:

- If `gross ≤ 1153` → `NPD = 747`
- If calculated NPD `< 0` → `NPD = 0`

---

### 📊 Progressive GPM (Income Tax)

| Gross Salary Range | Tax Rate |
|--------------------|----------|
| Up to first threshold | 20% |
| Second threshold | 25% |
| Above highest threshold | 32% |

---

### 🧾 Social Contributions

- **VSD** – 12.52%
- **PSD** – 6.98%

These are deducted from the gross salary before calculating final net income.

## 📂 Project Structure


├── index.html # User Interface
├── script.js # Tax calculation logic
├── styles.css # Styling (basic/minimal)
└── README.md # Documentation

## TEST
https://candid-florentine-ef814d.netlify.app/

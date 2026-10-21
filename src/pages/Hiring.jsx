import { useState } from "react";
import { Circle, Star, Sparkle, Dot, PlusIcon, Blob } from "../components/Decor";
import { PRICE_SHEET, TOS_SECTIONS, SOCIALS } from "../data/content";
import "./Hiring.css";
import usePageTitle from "../hooks/usePageTitle";
import phoqueAngel from "../assets/phoque/angel.png";
import phoqueBaby from "../assets/phoque/baby.png";
import phoqueIce from "../assets/phoque/ice.png";
import phoqueSoda from "../assets/phoque/soda.png";
import phoqueSummer from "../assets/phoque/summer.png";

const emailLink = SOCIALS.find((s) => s.label === "ART EMAIL");

// Pixel phoque mascots floating beside the hero copy.
const PHOQUES = [
  { src: phoqueBaby, name: "baby", pos: "p1" },
  { src: phoqueAngel, name: "angel", pos: "p2" },
  { src: phoqueIce, name: "ice", pos: "p3" },
  { src: phoqueSoda, name: "soda", pos: "p4" },
  { src: phoqueSummer, name: "summer", pos: "p5" },
];

const CURRENCY_KEY = "hiring-currency";

function loadCurrency() {
  try {
    return localStorage.getItem(CURRENCY_KEY) === "USD" ? "USD" : "THB";
  } catch {
    return "THB";
  }
}

// Prices are stored in THB ("1,200"); USD is converted and rounded up to a whole dollar.
function formatPrice(thb, currency) {
  const amount = Number(thb.replace(/,/g, ""));
  if (currency === "USD") return `$${Math.ceil(amount / PRICE_SHEET.usdRate).toLocaleString("en-US")}+`;
  return `฿${amount.toLocaleString("en-US")}+`;
}

export default function Hiring() {
  usePageTitle("Services");
  const [currency, setCurrency] = useState(loadCurrency);

  const chooseCurrency = (c) => {
    setCurrency(c);
    try {
      localStorage.setItem(CURRENCY_KEY, c);
    } catch {
      // Storage unavailable — the choice just won't be remembered.
    }
  };
  return (
    <>
      <section className="section hiring-hero">
        <div className="decor-field">
          <Blob size={200} color="var(--lavender)" style={{ top: "0%", left: "-8%" }} opacity={0.6} />
          <Circle size={70} color="var(--cyan)" style={{ top: "10%", right: "8%" }} filled={false} anim="a" />
          <Star size={18} style={{ bottom: "12%", left: "8%" }} />
          <Sparkle size={16} style={{ top: "50%", right: "4%" }} />
        </div>
        <div className="container hiring-hero__inner">
          <div className="hiring-hero__text">
            <span className="eyebrow">Commissions Open</span>
            <h1 className="section-heading">SERVICES</h1>
            <p className="section-sub hiring-hero__sub">
              Illustration commissions — from clean headshots to full-body renders. Take a look at the
              price sheet and terms below, then get in touch with your idea.
            </p>
            <a href={emailLink.href} className="btn btn-primary hiring-hero__cta">
              GET IN TOUCH →
            </a>
          </div>

          <div className="phoque-cluster" aria-hidden="true">
            <span className="phoque-cluster__glow" />
            {PHOQUES.map((p) => (
              <img key={p.name} src={p.src} alt="" className={`phoque phoque--${p.pos}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <span className="eyebrow">01 — Price Sheet</span>
          <h2 className="section-heading">PRICING</h2>
          <div className="pricing-head">
            <div>
              <p className="section-sub">
                {currency === "THB"
                  ? "All prices in Thai Baht (฿). Starting prices — final quote depends on complexity."
                  : `All prices in US Dollars ($), converted from Thai Baht at about ฿${PRICE_SHEET.usdRate} = $1. Starting prices — final quote depends on complexity.`}
              </p>
              <p className="pricing-note">
                ※ USD prices are estimates and may change with the exchange rate at the time of commission.
              </p>
            </div>
            <div className="currency-toggle" role="group" aria-label="Currency">
              {["THB", "USD"].map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`currency-toggle__btn ${currency === c ? "is-active" : ""}`}
                  aria-pressed={currency === c}
                  onClick={() => chooseCurrency(c)}
                >
                  {c === "THB" ? "฿ THB" : "$ USD"}
                </button>
              ))}
            </div>
          </div>

          {PRICE_SHEET.tables.map((table, t) => (
            <div className="price-group" key={table.title}>
              <h3 className="price-group__title">
                {String(t + 1).padStart(2, "0")} — {table.title}
              </h3>
              <div className="price-table-wrap">
                <table className="price-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      {table.columns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.type}>
                        <td className="price-table__type">{row.type}</td>
                        {row.prices.map((price, i) => (
                          <td key={i}>{formatPrice(price, currency)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="price-group">
            <h3 className="price-group__title">
              {String(PRICE_SHEET.tables.length + 1).padStart(2, "0")} — {PRICE_SHEET.ych.title}
            </h3>
            <div className="ych-card">
              <span className="ych-card__status">{PRICE_SHEET.ych.status}</span>
              <p className="ych-card__text">YCH slots are coming soon — stay tuned!</p>
            </div>
          </div>

          <div className="addons">
            <span className="addons__label">Add-ons</span>
            <ul className="addons__list">
              {PRICE_SHEET.addons.map((a) => (
                <li key={a.label} className="addons__item">
                  <span className="addons__name">{a.label}</span>
                  <span className="addons__price">{a.percent || formatPrice(a.price, currency)}</span>
                  <span className="addons__note">{a.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section tos-section">
        <div className="decor-field">
          <PlusIcon size={18} style={{ top: "8%", right: "10%" }} />
          <Dot size={10} color="var(--pink)" style={{ bottom: "10%", left: "8%" }} />
        </div>
        <div className="container">
          <span className="eyebrow">02 — Terms of Service</span>
          <h2 className="section-heading">TERMS OF SERVICE</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>
            Please read before commissioning — these terms apply to every project.
          </p>

          {TOS_SECTIONS.map((group) => (
            <div className="tos-group" key={group.title}>
              <h3 className="tos-group__title">{group.title}</h3>
              <div className="tos-grid">
                {group.items.map((item) => (
                  <div className="tos-card" key={item.label}>
                    <span className="tos-card__label">{item.label}</span>
                    <p className="tos-card__text">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section hiring-cta">
        <div className="container hiring-cta__panel">
          <div>
            <span className="eyebrow">Ready?</span>
            <h2 className="hiring-cta__heading">Let's talk about your commission.</h2>
          </div>
          <a href={emailLink.href} className="btn btn-primary">
            GET IN TOUCH →
          </a>
        </div>
      </section>
    </>
  );
}

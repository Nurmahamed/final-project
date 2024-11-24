import React from "react";
import Button from "./Button";
import "./Content.css";

const Content = () => {
  const handleBuyClick = () => {
    alert("Вы нажали на кнопку 'Купить'!");
  };

  return (
    <div className="pdd-content">
      <h2 className="pdd-title">Методическое пособие:</h2>
      <p className="pdd-description">
        Методическое пособие по правилам дорожного движения (ПДД) с
        иллюстрациями и комментариями. Методическое пособие составлено с
        дополнениями и пояснениями к дорожным знакам и разметкам.
      </p>
      <p className="pdd-description">
        При покупке оптом возможны скидки. За более подробной информацией
        обращайтесь напрямую к Руслану Жакшылыкулы по телефону или WhatsApp.
      </p>
      <p className="pdd-address">📍 Сухе Батора 26/1</p>
      <Button onClick={handleBuyClick} />
    </div>
  );
};

export default Content;

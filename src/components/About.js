import React from 'react';
import '../Styles/About.css'; // Подключаем CSS файл

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">О нас</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>SABE - Кто такие?</h2>
          <p>Мы молодая и амбициозная компания, которая недавно открылась,
             и рады приветствовать вас в нашем магазине! Наша цель – предложить вам стильные и качественные
               товары, которые помогут создать уникальный образ и подчеркнуть вашу индивидуальность.</p>
        </div>
        <div className="about-section">
          <h2>Что продаём?</h2>
          <p> Мы специализируемся на продаже брендовой одежды, обуви и аксессуаров от ведущих мировых производителей.
            Наш ассортимент тщательно подобран, чтобы каждый клиент мог найти что-то по своему вкусу – будь то классика,
             повседневный стиль или последние модные тренды.</p>
        </div>
        <div className="about-section">
          <h2>Контакты</h2>
          <p>Свяжитесь с нами для получения дополнительной информации о нашей компании и услугах:</p>
          <ul>
            <li>Электронная почта для предложений: sabesalescorp@gmail.com</li>
            <li>Электронная почта поддержки: sabe_support@example.com</li>
            <li>Телеграм поддержки: @SABE_support</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

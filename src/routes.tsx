import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from 'pages/Home';
import { Professional } from 'pages/Professional';
import { Contacts } from 'pages/Contacts';

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;

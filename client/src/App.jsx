import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Header from './pages/components/Header'; 
import Home from './pages/home/Home';
import AccSummary from './pages/myaccount/AccSummary';
import AccStatement from './pages/myaccount/AccStatement';
import AccProfile from './pages/myaccount/AccProfile';
import AccActivityLog from './pages/myaccount/AccActivityLog';
import LifetimePL from './pages/myaccount/LifetimePL';
import AccTransactionHistory from './pages/myaccount/AccTransactionHistory';
import AccTransactionHistory2 from './pages/myaccount/AccTransactionHistory2';
import AccProfitAndLoss from './pages/myaccount/AccProfitAndLoss';
import AccBettingHistory from './pages/myaccount/AccBettingHistory';
import MemberAcctSmry from './pages/myaccount/MemberAcctSmry';
import ProfitMarket from './pages/myreports/ProfitMarket';
import DownlinePt2 from './pages/myreports/DownlinePt2';
import MatchProfitLoss from './pages/myreports/MatchProfitLoss';
import CasinoPLDownlineNew from './pages/myreports/CasinoPLDownlineNew';
import SABAPLDownlineNew from './pages/myreports/SABAPLDownlineNew';
import ParlayPLDownLine from './pages/myreports/ParlayPLDownLine';
import ShowProviderPL from './pages/myreports/ShowProviderPL';
import BetList from './pages/myreports/BetList';
import BetListLive from './pages/myreports/BetListLive';
import Login from './pages/login/Login';
import RiskManagement from './pages/riskmanagement/RiskManagement';  
import CasinoRiskManagement from './pages/riskmanagement/CasinoRiskManagement';
import ParlayRiskManagement from './pages/riskmanagement/ParlayRiskManagement';
import Banking from './pages/banking/Banking';
import BlockMarket from './pages/blockmarket/BlockMarket';
import BlockMarketList from './pages/blockmarket/BlockMarketList';
import SportSettings from './pages/sportsetting/SportSettings';
import MinMaxBet from './pages/sportsetting/MinMaxBet';
import BookmakerSetting from './pages/sportsetting/BookmakerSetting';
import ManuplationSetting from './pages/sportsetting/ManuplationSetting';
import AdminSettings from './pages/adminsettings/AdminSettings';
import SetResult from './pages/setresult/SetResult';
import SetFancyResult from './pages/setresult/SetFancyResult';
import SetMarketResult from './pages/setresult/SetMarketResult';
import AddMatch from './pages/addmatch/AddMatch';
import DefaultSetting from './pages/addmatch/DefaultSetting';
import CheckSportWiseResult from './pages/oldresult/CheckSportWiseResult';

function AppWrapper() {
  const location = useLocation();
  const hideHeaderPaths = ['/', '/login'];

  const ShowHeader = !hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {ShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* My Account */}
        <Route path="/AccSummary" element={<AccSummary />} />
        <Route path="/AccStatement" element={<AccStatement />} />
        <Route path="/AccProfile" element={<AccProfile />} />
        <Route path="/AccActivityLog" element={<AccActivityLog />} />
        <Route path="/LifetimePL" element={<LifetimePL />} />
        <Route path="/AccTransactionHistory" element={<AccTransactionHistory />} />
        <Route path="/AccTransactionHistory2" element={<AccTransactionHistory2 />} />
        <Route path="/AccProfitAndLoss" element={<AccProfitAndLoss />} />
        <Route path="/AccBettingHistory" element={<AccBettingHistory />} />
        <Route path="/MemberAcctSmry" element={<MemberAcctSmry />} />
        {/* My Reports */}
        <Route path="/ProfitMarket" element={<ProfitMarket />} />
        <Route path="/DownlinePt2" element={<DownlinePt2 />} />
        <Route path="/MatchProfitLoss" element={<MatchProfitLoss />} />
        <Route path="/CasinoPLDownlineNew" element={<CasinoPLDownlineNew />} />
        <Route path="/SABAPLDownlineNew" element={<SABAPLDownlineNew />} />
        <Route path="/ParlayPLDownLine" element={<ParlayPLDownLine />} />
        <Route path="/ShowProviderPL" element={<ShowProviderPL />} />
        {/* Bet List */}
        <Route path="/BetList" element={<BetList />} />
        <Route path="/BetListLive" element={<BetListLive />} />
        {/* Risk Managament */}
        <Route path="/RiskManagement" element={<RiskManagement />} />
        <Route path="/CasinoRiskManagement" element={<CasinoRiskManagement />} />
        <Route path="/ParlayRiskManagement" element={<ParlayRiskManagement />} />
        {/* Banking */}
        <Route path="/Banking" element={<Banking />} />
        {/* Block Market */}
        <Route path="/BlockMarket" element={<BlockMarket />} />
        <Route path="/BlockMarketList" element={<BlockMarketList />} />
        {/* Sport Settings */}
        <Route path="/SportSettings" element={<SportSettings />} />
        <Route path="/MinMaxBet" element={<MinMaxBet />} />
        <Route path="/BookmakerSetting" element={<BookmakerSetting />} />
        <Route path="/ManuplationSetting" element={<ManuplationSetting />} />
        {/* Admin Settings */}
        <Route path="/AdminSettings" element={<AdminSettings />} />
        {/* Set Result */}
        <Route path="/SetResult" element={<SetResult />} />
        <Route path="/SetFancyResult" element={<SetFancyResult />} />
        <Route path="/SetMarketResult" element={<SetMarketResult />} />
        {/* Add Match */}
        <Route path="/AddMatch" element={<AddMatch />} />
        <Route path="/DefaultSetting" element={<DefaultSetting />} />
        {/* Old Res. */}
        <Route path="/CheckSportWiseResult" element={<CheckSportWiseResult />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;

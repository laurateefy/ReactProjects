import chefClaudeIcon from '../assets/chef-claude-icon.png';
import './Header.css';
export default function Header() {

  return (
    <>
    <header>
      <img src={chefClaudeIcon} alt="Chef Claude Icon" />
      <h1>Chef Claude</h1>
    </header>
    </>
  )
}
import MyCounter from './components/MyCounter'
import MyGithub from './components/MyGithub'

function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Shreya Deb - j15m224</h2><hr />
      <MyCounter adder={1} startNum={0} /><hr />
      <MyCounter adder={2} startNum={0} /><hr />
      <MyGithub /><hr />
    </div>
  );
}

export default App;
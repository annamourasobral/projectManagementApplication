import { TranslationProvider } from './TranslationContext';
import Header from './components/Header';
import ListTask from './pages/task/ListTask';

function App() {
    return (
        <div className='App'>
            <TranslationProvider>
                <Header />
                <ListTask />
            </TranslationProvider>
        </div>
    );
}

export default App;

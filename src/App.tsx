import Nav from './components/Nav';

const App = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />
            <main className="p-6">
                <h1 className="text-3xl font-bold">Welcome to My App</h1>
                <p className="mt-2 text-gray-700">This is a template for a Vite project with React and Tailwind CSS.</p>
            </main>
        </div>
    );
};

export default App;

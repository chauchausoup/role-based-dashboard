import {Button} from '@/components/ui/button';

const Nav = () => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">My App</div>
            <div>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Click Me</Button>
            </div>
        </nav>
    );
};

export default Nav;

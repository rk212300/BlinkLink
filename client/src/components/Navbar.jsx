import Button from "./Button";
import InputComponent from "./InputComponent";
import ProfileCard from "./ProfileCard";

const Navbar = () => {
    return (
        <section className="flex items-center justify-end bg-white px-4 py-2 gap-4 border-b sticky top-0">
            <InputComponent
                placeholder="Search"
                className="rounded-sm bg-gray-100"
            />
            <Button
                label="Upgrade"
                className="bg-emerald-700 text-white hover:bg-emerald-600"
            />
            <ProfileCard />
        </section>
    );
};

export default Navbar;

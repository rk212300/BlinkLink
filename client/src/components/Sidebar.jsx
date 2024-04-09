import Button from "./Button";
import Divider from "./Divider";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const labels = [
        {
            label: "Home",
            route: "/home",
        },
        {
            label: "Links",
            route: "/links",
        },
        {
            label: "QR Codes",
            route: "/qrcode",
        },
        {
            label: "Link-in-bio",
            route: "/link-in-bio",
        },
        {
            label: "Analytics",
            route: "/analytics",
        },
        {
            label: "Campaigns",
            route: "/campaigns",
        },
        {
            label: "Custom links",
            route: "/custom-links",
        },
    ];
    return (
        <section className="px-4 w-ful bg-white h-full relative overflow-visible">
            <p className="text-orange-600 my-4 font-serif text-2xl">
                BlinkLink
            </p>
            <Button label="Create New" onClick={() => {}} className="w-full" />
            <Divider className="mt-4 mb-2" />
            <div className="flex flex-col items-start gap-4">
                {labels.map(({ label, route }, index) => (
                    <Item key={index} label={label} route={route} />
                ))}
            </div>

            <Divider className="my-2" />

            <Item label="Settings" className="my-2" />
        </section>
    );
};

const Item = ({ label, className = "", route = "" }) => {
    const navigation = useNavigate();

    const handleClick = () => {
        if (route) {
            navigation(route);
        }
    };

    return (
        <div
            className={`hover:bg-gray-200 w-full py-2 rounded-sm px-2 cursor-pointer ${className}`}
            onClick={handleClick}
        >
            <p className="ml-2">{label}</p>
        </div>
    );
};

Item.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    route: PropTypes.string,
};

export default Sidebar;

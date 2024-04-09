import EmptyComponent from "@/components/EmptyComponent";
import LinkItemComponent from "@/components/LinkItemComponent";
import { useNavigate } from "react-router-dom";

const Links = () => {
    const navigation = useNavigate();
    const items = [
        {
            title: "Hello World!",
            shortUrl: "bit.ly/rk212300",
            url: "http://www.google.com",
            date: 1712605104957,
        },
    ];
    const isEmpty = items.length === 0;
    return (
        <section className="px-40 rounded-sm mt-10">
            {true && (
                <EmptyComponent
                    header="Shorten Links"
                    description="Create short links for your website, social media, and more."
                    button={{
                        label: "Get Started",
                        onClick: () => {
                            navigation("create");
                        },
                    }}
                    scta={{ label: "Learn more" }}
                />
            )}
            {!isEmpty && (
                <>
                    <h1 className="font-bold text-4xl my-5">Links</h1>

                    <div className="flex flex-col gap-4">
                        {[...Array(5)].map((_, index) => (
                            <LinkItemComponent
                                key={index}
                                title={items[0].title}
                                shortUrl={items[0].shortUrl}
                                url={items[0].url}
                                date={items[0].date}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Links;

import Divider from "@/components/Divider";
import EmptyComponent from "@/components/EmptyComponent";
import LinkItemComponent from "@/components/LinkItemComponent";
import { useNavigate } from "react-router-dom";

const Links = () => {
    const navigation = useNavigate();
    const items = [
        {
            title: "Hello World!",
            shortUrl: "bit.ly/rk212300",
            url: "https://docs.google.com/presentation/d/1KPY-q29dRE1syVeoQZZZL5JgRRBmAsFCjwVaBts-kZ4/edit#slide=id.p",
            date: 1712605104957,
        },
    ];
    const isEmpty = items.length === 0;
    return (
        <section className="mx-20 rounded-sm">
            {isEmpty && (
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
                <div className="mb-5">
                    <h1 className="font-bold text-4xl mt-4 mb-2">Links</h1>
                    <Divider className="mb-4" />

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
                    <div className="text-center mt-4 flex items-center justify-center">
                        <div className="inline-block w-1/12 border-b border-black"></div>
                        <p className="inline-block mx-2 font-light text-sm">
                            You&apos;ve reached the end of your links
                        </p>
                        <div className="inline-block w-1/12 border-b border-black"></div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Links;

import SiteHeader from "@/components/Header";
import {HeroSection} from "@/components/Hero";
import {LogoTicker} from "@/components/LogoTicker";
import SiteFooter from "@/components/Footer";
import {CallToAction} from "@/components/CallToAction";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import {GithubIndicator} from "@/components/github-indicator";

export default function Home() {
    return (
        <>
            <SiteHeader />
            <HeroSection />
            <LogoTicker />
            <Features />
            <Testimonials />
            <CallToAction />
            <GithubIndicator />
            <SiteFooter />
        </>
    );
}
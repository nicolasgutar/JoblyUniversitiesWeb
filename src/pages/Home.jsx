import React from "react";
import { Card, CardBody } from "@material-tailwind/react";

const Home = () => {
    return (
        <div className="bg-background text-contrastT">
            {/* Header and Features Section with Shared Background */}
            <div
                className="bg-cover bg-center"
                style={{
                    backgroundImage: "url('/landing.webp')",
                }}
            >
                {/* Header Section */}
                <header className="text-center py-20 relative">
                    <div
                        className="absolute inset-0 bg-gradient-to-b from-gray-600 via-black/75 to-transparent opacity-90"
                        style={{zIndex: 1}}
                    ></div>
                    <div className="relative z-10 bg-opacity-50 p-10">
                        <h1 className="text-4xl font-bold mb-4 text-white">
                            Bienvenido a Nuestra Plataforma
                        </h1>
                        <p className="text-lg text-gray-200">
                            La mejor manera de conectar estudiantes con oportunidades laborales en el campus y más allá.
                        </p>
                    </div>
                </header>


                {/* Features Section */}
                <section className="py-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black opacity-90"
                         style={{zIndex: 1}}></div>
                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-semibold text-white mb-8">
                            Características Principales
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-white bg-opacity-70 shadow-lg">
                                <CardBody>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                                        Encuentra trabajos en el campus
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        Explora oportunidades laborales directamente en tu universidad y encuentra el
                                        trabajo ideal para ti.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card className="bg-white bg-opacity-70 shadow-lg">
                                <CardBody>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                                        Aplicación fácil
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        Aplica a trabajos con un solo clic gracias a nuestros socios estratégicos.
                                    </p>
                                </CardBody>
                            </Card>
                            <Card className="bg-white bg-opacity-70 shadow-lg">
                                <CardBody>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                                        Acceso al mercado laboral más grande
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        Descubre la mayor selección de trabajos para estudiantes en línea.
                                    </p>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>

            {/* Strategic Partners Section */}
            <section className="py-20 bg-backgroundT text-backgroundP">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-6">
                        Nuestros Socios Estratégicos
                    </h2>
                    <p className="text-base mb-8">
                        Estamos orgullosos de colaborar con líderes en la industria como Jobly para ofrecerte las
                        mejores oportunidades laborales.
                    </p>
                    <div className="flex justify-center gap-6">
                        {/* Placeholder for partner logos */}
                        <div className="p-6 bg-contrastT rounded-lg shadow-md">
                            <p className="font-bold">Jobly</p>
                        </div>
                        <div className="p-6 bg-contrastT rounded-lg shadow-md">
                            <p className="font-bold">[Socio 2]</p>
                        </div>
                        <div className="p-6 bg-contrastT rounded-lg shadow-md">
                            <p className="font-bold">[Socio 3]</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-contrastP text-contrastT py-6 text-center">
                <p className="text-sm">&copy; 2024 Nuestra Plataforma. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};

export default Home;

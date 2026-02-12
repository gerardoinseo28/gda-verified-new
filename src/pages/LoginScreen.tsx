import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { useLanguage } from '../LanguageContext';

const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
    const { t } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica real, por ahora simulamos login
        onLogin();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background-dark text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-sm"
            >
                <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-icons text-5xl text-white">local_shipping</span>
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center mb-2">{t('appTitle')}</h1>
                <p className="text-slate-400 text-center mb-8">{t('subtitle')}</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-surface-dark border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-400 mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-surface-dark border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-95"
                    >
                        Entrar
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    ¿No tienes cuenta? <span className="text-primary font-medium">Regístrate</span>
                </p>
            </motion.div>
        </div>
    );
};

export default LoginScreen;

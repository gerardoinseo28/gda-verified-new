
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { supabase } from '../supabaseClient';

const RegisterVehicle = ({ onBack }: { onBack: () => void }) => {
    const { t } = useLanguage();
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        plate: '',
        brand: '',
        model: '',
        year: '',
        km: '',
        type: 'sedan'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = async () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setLoading(true);
            try {
                const { error } = await supabase
                    .from('vehicles')
                    .insert([
                        {
                            plate: formData.plate.toUpperCase(),
                            brand: formData.brand,
                            model: formData.model,
                            year: parseInt(formData.year) || 2024,
                            km: parseInt(formData.km) || 0,
                            type: formData.type
                        }
                    ]);

                if (error) throw error;

                alert("¡Vehículo registrado exitosamente en IDP Global!");
                onBack();
            } catch (error: any) {
                alert("Error al guardar: " + error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex flex-col h-full bg-background-dark p-4">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <button onClick={onBack} className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center border border-slate-700">
                    <span className="material-icons text-slate-400">arrow_back</span>
                </button>
                <h1 className="text-xl font-bold text-white">Alta de Unidad</h1>
            </div>

            {/* Progress Bar */}
            <div className="flex gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`h-1 flex-1 rounded-full ${s <= step ? 'bg-primary' : 'bg-slate-800'}`} />
                ))}
            </div>

            <div className="flex-1 overflow-y-auto space-y-6">
                {step === 1 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">1. Identificación</h2>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Dominio / Patente</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="plate"
                                    value={formData.plate}
                                    onChange={handleInputChange}
                                    className="w-full bg-surface-dark border border-slate-700 rounded-xl p-4 text-2xl font-mono uppercase text-center tracking-widest focus:border-primary focus:outline-none"
                                    placeholder="AA 123 BB"
                                />
                                <div className="absolute top-1/2 right-4 -translate-y-1/2">
                                    <span className="material-icons text-green-500">check_circle</span>
                                </div>
                            </div>
                            <p className="text-[10px] text-slate-500 mt-2 text-center">Sistema conectado a DNRPA (Simulado)</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Marca</label>
                                <input type="text" name="brand" onChange={handleInputChange} className="w-full bg-surface-dark border border-slate-700 rounded-xl p-3 text-white focus:border-primary outline-none" placeholder="Toyota" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Modelo</label>
                                <input type="text" name="model" onChange={handleInputChange} className="w-full bg-surface-dark border border-slate-700 rounded-xl p-3 text-white focus:border-primary outline-none" placeholder="Hilux" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Tipo</label>
                                <select name="type" onChange={handleInputChange} className="w-full bg-surface-dark border border-slate-700 rounded-xl p-3 text-white focus:border-primary outline-none appearance-none">
                                    <option value="sedan">Sedán / Auto</option>
                                    <option value="pickup">Pick-up / 4x4</option>
                                    <option value="truck">Camión / Pesado</option>
                                    <option value="moto">Moto</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Año</label>
                                <input type="number" name="year" onChange={handleInputChange} className="w-full bg-surface-dark border border-slate-700 rounded-xl p-3 text-white focus:border-primary outline-none" placeholder="2024" />
                            </div>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h2 className="text-lg font-semibold text-primary">2. Estado Actual</h2>

                        <div className="bg-surface-dark p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center gap-4 border-dashed cursor-pointer hover:border-primary transition-colors">
                            <span className="material-icons text-4xl text-slate-500">add_a_photo</span>
                            <span className="text-sm font-medium text-slate-400">Tomar foto frontal</span>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Odómetro (KM)</label>
                            <input
                                type="number"
                                name="km"
                                value={formData.km}
                                onChange={handleInputChange}
                                className="w-full bg-surface-dark border border-slate-700 rounded-xl p-4 text-xl font-mono text-white focus:border-primary outline-none"
                                placeholder="0"
                            />
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6 text-center">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="material-icons text-4xl text-green-500">verified</span>
                        </div>
                        <h2 className="text-xl font-bold text-white">¡Todo Listo!</h2>
                        <p className="text-slate-400 text-sm">El vehículo se registrará en IDP Global y quedará vinculado a tu cuenta.</p>

                        <div className="bg-surface-dark p-4 rounded-xl text-left text-xs text-slate-400 space-y-2">
                            <div className="flex justify-between"><span>Patente:</span> <span className="text-white font-mono">{formData.plate.toUpperCase()}</span></div>
                            <div className="flex justify-between"><span>Unidad:</span> <span className="text-white">{formData.brand} {formData.model}</span></div>
                            <div className="flex justify-between"><span>Estado:</span> <span className="text-green-400">Pendiente de Verificación</span></div>
                        </div>
                    </motion.div>
                )}
            </div>

            <button
                onClick={handleNext}
                disabled={loading}
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-95 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? 'Guardando en IDP...' : (step === 3 ? 'Confirmar Registro' : 'Continuar')}
            </button>
        </div>
    );
};

export default RegisterVehicle;

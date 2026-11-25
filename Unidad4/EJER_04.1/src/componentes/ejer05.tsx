import { useEffect, useRef, useState } from "react";

function FormularioAcceso() {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");

    const [mostrarContrasena, setMostrarContrasena] = useState(false);

    const campoCorreo = useRef<HTMLInputElement>(null);
    const campoContrasena = useRef<HTMLInputElement>(null);

    useEffect(() => {
        campoCorreo.current?.focus();
    }, []);

    const errorCorreo = !correo.includes("@")
        ? "El correo debe contener @"
        : "";

    const errorContrasena = contrasena.length < 8
        ? "La contraseña debe tener al menos 8 caracteres"
        : "";

    function manejarEnvio(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (errorCorreo) {
            campoCorreo.current?.focus();
            return;
        }

        if (errorContrasena) {
            campoContrasena.current?.focus();
            return;
        }

        alert("¡Acceso correcto!");
    }

    function manejarVaciar() {
        setCorreo("");
        setContrasena("");

        campoCorreo.current?.focus();
    }

    return (
        <main>
            <h1>Formulario de acceso</h1>

            <form onSubmit={manejarEnvio}>
                {/* CORREO */}
                <div>
                    <label htmlFor="correo">Correo electrónico</label>

                    <input
                        ref={campoCorreo}
                        id="correo"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        placeholder="ejemplo@correo.com"
                    />

                    {correo.length > 0 && errorCorreo && (
                        <p style={{ color: "red" }}>
                            {errorCorreo}
                        </p>
                    )}
                </div>

                {/* CONTRASEÑA */}
                <div>
                    <label htmlFor="contrasena">Contraseña</label>

                    <input
                        ref={campoContrasena}
                        id="contrasena"
                        type={mostrarContrasena ? "text" : "password"}
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                        placeholder="Mínimo 8 caracteres"
                    />

                    {contrasena.length > 0 && errorContrasena && (
                        <p style={{ color: "red" }}>
                            {errorContrasena}
                        </p>
                    )}

                    <button
                        type="button"
                        onClick={() =>
                            setMostrarContrasena(!mostrarContrasena)
                        }
                    >
                        {mostrarContrasena
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"}
                    </button>
                </div>

                {/* BOTONES */}
                <div>
                    <button type="submit">
                        Entrar
                    </button>

                    <button
                        type="button"
                        onClick={manejarVaciar}
                    >
                        Vaciar
                    </button>
                </div>
            </form>
        </main>
    );
}

export default FormularioAcceso;

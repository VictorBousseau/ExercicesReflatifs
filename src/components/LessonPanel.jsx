import React from 'react';

const LessonPanel = () => {
    return (
        <div className="lesson-panel">
            <h2>Cours & Règles</h2>

            <div className="lesson-card">
                <h3>Addition de nombres relatifs</h3>
                <div className="rule-section">
                    <h4>Même signe</h4>
                    <p>On garde le signe commun et on additionne les distances à zéro.</p>
                    <div className="example">
                        Ex: (+3) + (+5) = +8<br />
                        Ex: (-3) + (-5) = -8
                    </div>
                </div>

                <div className="rule-section">
                    <h4>Signes contraires</h4>
                    <p>Le résultat a le signe du nombre qui a la plus grande distance à zéro. On fait la différence des distances à zéro.</p>
                    <div className="example">
            Ex: (-5) + (+3) = -2 (car 5 > 3, donc signe -)<br />
                        Ex: (+5) + (-3) = +2
                    </div>
                </div>
            </div>

            <div className="lesson-card">
                <h3>Soustraction</h3>
                <p>Soustraire un nombre relatif revient à ajouter son opposé.</p>
                <div className="example">
                    a - b = a + (-b)<br />
                    Ex: (+5) - (-2) = (+5) + (+2) = +7
                </div>
            </div>

            <div className="lesson-card">
                <h3>Multiplication & Division</h3>
                <p>Règle des signes :</p>
                <div className="rule-section">
                    <ul>
                        <li>(+) × (+) = (+)</li>
                        <li>(-) × (-) = (+)</li>
                        <li>(+) × (-) = (-)</li>
                        <li>(-) × (+) = (-)</li>
                    </ul>
                    <p>C'est la même règle pour la division !</p>
                </div>
            </div>

            <div className="lesson-card">
                <h3>Priorités opératoires</h3>
                <ol>
                    <li>Les calculs entre <strong>parenthèses</strong> sont prioritaires.</li>
                    <li>Ensuite, les <strong>multiplications</strong> et divisions.</li>
                    <li>Enfin, les additions et soustractions.</li>
                </ol>
                <div className="example">
                    Ex: 2 + 3 × 4 = 2 + 12 = 14<br />
                    Ex: (2 + 3) × 4 = 5 × 4 = 20
                </div>
            </div>

            <div className="lesson-card">
                <h3>Simplification d'écriture</h3>
                <p>On peut supprimer les parenthèses et le signe + du début.</p>
                <div className="example">
                    (+5) + (-3) devient 5 - 3
                </div>
            </div>
        </div>
    );
};

export default LessonPanel;

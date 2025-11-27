
export const generateQuestion = (level) => {
  let num1, num2, operation, answer, explanation, question;

  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  switch (level) {
    case 1: // Addition of integers with same signs
      if (Math.random() > 0.5) {
        num1 = getRandomInt(1, 10);
        num2 = getRandomInt(1, 10);
      } else {
        num1 = getRandomInt(-10, -1);
        num2 = getRandomInt(-10, -1);
      }
      operation = '+';
      answer = num1 + num2;
      question = `${num1} + (${num2})`;
      explanation = `Les deux nombres sont de même signe. On garde le signe commun (${num1 > 0 ? '+' : '-'}) et on additionne les distances à zéro : ${Math.abs(num1)} + ${Math.abs(num2)} = ${Math.abs(answer)}.`;
      break;

    case 2: // Addition of integers with different signs
      num1 = getRandomInt(-10, 10);
      while (num1 === 0) num1 = getRandomInt(-10, 10);
      num2 = getRandomInt(-10, 10);
      while (num2 === 0 || (num1 > 0 && num2 > 0) || (num1 < 0 && num2 < 0)) {
        num2 = getRandomInt(-10, 10);
      }
      operation = '+';
      answer = num1 + num2;
      question = `${num1} + (${num2})`;
      const sign = Math.abs(num1) > Math.abs(num2) ? (num1 > 0 ? '+' : '-') : (num2 > 0 ? '+' : '-');
      explanation = `Les deux nombres sont de signes contraires. Le résultat a le signe du nombre qui a la plus grande distance à zéro (ici ${Math.abs(num1) > Math.abs(num2) ? num1 : num2}, donc ${sign}). On fait la différence des distances à zéro : ${Math.max(Math.abs(num1), Math.abs(num2))} - ${Math.min(Math.abs(num1), Math.abs(num2))} = ${Math.abs(answer)}.`;
      break;

    case 3: // Subtraction
      num1 = getRandomInt(-10, 10);
      num2 = getRandomInt(-10, 10);
      operation = '-';
      answer = num1 - num2;
      question = `${num1} - (${num2})`;
      explanation = `Soustraire un nombre revient à ajouter son opposé. Donc ${num1} - (${num2}) devient ${num1} + (${-num2}). Ensuite, on applique les règles de l'addition.`;
      break;

    case 4: // Mixed operations
      const isAddition = Math.random() > 0.5;
      if (isAddition) {
        return generateQuestion(2); // Reuse level 2 logic roughly
      } else {
        return generateQuestion(3);
      }
      break;

    case 5: // Multiplication
      num1 = getRandomInt(-10, 10);
      num2 = getRandomInt(-10, 10);
      operation = '*';
      answer = num1 * num2;
      question = `${num1} × (${num2})`;
      explanation = `Règle des signes pour la multiplication : \n- Même signe ( + × + ou - × - ) → Résultat POSITIF (+)\n- Signes contraires ( + × - ou - × + ) → Résultat NÉGATIF (-)\nIci : ${num1} × ${num2} = ${answer}`;
      break;

    case 6: // Priorities (Multiplication before Addition/Subtraction)
      // Format: a + b * c
      let p1 = getRandomInt(-5, 5);
      let p2 = getRandomInt(-5, 5);
      let p3 = getRandomInt(-5, 5);
      answer = p1 + p2 * p3;
      question = `${p1} + ${p2} × (${p3})`;
      explanation = `La multiplication est PRIORITAIRE sur l'addition.\nOn calcule d'abord ${p2} × (${p3}) = ${p2 * p3}.\nEnsuite on ajoute ce résultat à ${p1} : ${p1} + (${p2 * p3}) = ${answer}.`;
      break;

    case 7: // Parentheses
      // Format: (a + b) * c
      let pa = getRandomInt(-5, 5);
      let pb = getRandomInt(-5, 5);
      let pc = getRandomInt(-5, 5);
      answer = (pa + pb) * pc;
      question = `(${pa} + ${pb}) × ${pc}`;
      explanation = `Les calculs entre parenthèses sont PRIORITAIRES.\nOn calcule d'abord (${pa} + ${pb}) = ${pa + pb}.\nEnsuite on multiplie par ${pc} : ${pa + pb} × ${pc} = ${answer}.`;
      break;

    case 8: // Division
      num2 = getRandomInt(-10, 10);
      while (num2 === 0) num2 = getRandomInt(-10, 10); // Avoid division by zero
      let multiplier = getRandomInt(-10, 10);
      num1 = num2 * multiplier; // Ensure integer result
      operation = '/';
      answer = multiplier;
      question = `${num1} ÷ (${num2})`;
      explanation = `Règle des signes pour la division (la même que pour la multiplication) :\n- Même signe → Résultat POSITIF (+)\n- Signes contraires → Résultat NÉGATIF (-)\nIci : ${num1} ÷ ${num2} = ${answer}`;
      break;

    case 9: // Chain of 3 operations (Mixed +, -, *)
    case 10: // Chain of 4 operations (Mixed +, -, *)
    case 11: // Chain of 5 operations (Mixed +, -, *)
      const numTerms = level - 6; // Level 9 -> 3 terms, 10 -> 4, 11 -> 5
      let terms = [];
      let ops = [];
      let expression = "";

      // Generate terms
      for (let i = 0; i < numTerms; i++) {
        let t = getRandomInt(-10, 10);
        while (t === 0) t = getRandomInt(-10, 10);
        terms.push(t);
      }

      // Generate operations with balanced probability
      for (let i = 0; i < numTerms - 1; i++) {
        const r = Math.random();
        if (r < 0.33) ops.push('+');
        else if (r < 0.66) ops.push('-');
        else ops.push('*');
      }

      // Construct the expression string for display
      expression = `${terms[0]}`;
      for (let i = 0; i < ops.length; i++) {
        let term = terms[i + 1];
        let op = ops[i];
        if (op === '*') {
          if (term < 0) expression += ` × (${term})`;
          else expression += ` × ${term}`;
        } else if (op === '+') {
          if (term < 0) expression += ` + (${term})`;
          else expression += ` + ${term}`;
        } else { // op === '-'
          if (term < 0) expression += ` - (${term})`;
          else expression += ` - ${term}`;
        }
      }

      // Calculate answer respecting priorities
      let calcExpression = `${terms[0]}`;

      for (let i = 0; i < ops.length; i++) {
        let term = terms[i + 1];
        let op = ops[i];
        calcExpression += ` ${op} ${term}`;
      }

      try {
        // eslint-disable-next-line no-eval
        answer = eval(calcExpression);
      } catch (e) {
        console.error("Error calculating", calcExpression, e);
        answer = 0;
      }

      // Retry if answer is too large
      if (Math.abs(answer) > 200) {
        return generateQuestion(level);
      }

      question = expression;
      explanation = `Attention aux priorités !\nLa multiplication est prioritaire sur l'addition et la soustraction.\nEffectue d'abord les multiplications, puis les calculs de gauche à droite.\nRésultat : ${answer}`;
      break;

    case 12: // Ultimate (Large numbers, complex mix)
      // Mix of addition, subtraction, multiplication with larger numbers
      let u1 = getRandomInt(-50, 50);
      let u2 = getRandomInt(-20, 20);
      let u3 = getRandomInt(-10, 10);

      // Random structure
      const structure = Math.floor(Math.random() * 3);

      if (structure === 0) { // (A + B) * C
        answer = (u1 + u2) * u3;
        question = `(${u1} + ${u2}) × ${u3}`;
        explanation = `Priorité aux parenthèses : (${u1} + ${u2}) = ${u1 + u2}. Puis multiplication : ${u1 + u2} × ${u3} = ${answer}.`;
      } else if (structure === 1) { // A + B * C
        answer = u1 + u2 * u3;
        question = `${u1} + ${u2} × ${u3}`;
        explanation = `Priorité à la multiplication : ${u2} × ${u3} = ${u2 * u3}. Puis addition : ${u1} + ${u2 * u3} = ${answer}.`;
      } else { // A * B - C
        answer = u1 * u2 - u3;
        question = `${u1} × ${u2} - ${u3}`;
        explanation = `Priorité à la multiplication : ${u1} × ${u2} = ${u1 * u2}. Puis soustraction : ${u1 * u2} - ${u3} = ${answer}.`;
      }
      break;

    default:
      return generateQuestion(1);
  }

  // Formatting cleanup
  if (level < 5) {
    if (num2 >= 0 && operation === '+') {
      question = `${num1} + ${num2}`;
    } else if (num2 < 0 && operation === '+') {
      question = `${num1} + (${num2})`;
    } else if (num2 >= 0 && operation === '-') {
      question = `${num1} - ${num2}`;
    } else {
      question = `${num1} - (${num2})`;
    }
  } else if (level === 5) {
    if (num2 >= 0) question = `${num1} × ${num2}`;
    else question = `${num1} × (${num2})`;
  } else if (level === 8) {
    if (num2 >= 0) question = `${num1} ÷ ${num2}`;
    else question = `${num1} ÷ (${num2})`;
  }

  return { question, answer, explanation };
};

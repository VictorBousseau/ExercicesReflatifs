
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

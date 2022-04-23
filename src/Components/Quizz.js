import React, { useState } from 'react';
import '../Pages/style.css';
import {Link, useNavigate} from 'react-router-dom';
import {globalStateContext} from '../App';
import {dispatchStateContext} from '../App';

    
const useGlobalState = () => [
        React.useContext(globalStateContext),
        React.useContext(dispatchStateContext)
	];
	

export default function App() {
	const [state, dispatch] = useGlobalState();
	let navigate = useNavigate();

	// Definition des questions, des propositions de reponse ainsi que des réponses correctes 
	const questions = [
		{
			questionTexte: 'Le secouriste doit transmettre aux secours une description précise des caractéristiques, c est à dire',
			reponseOptions: [
				{ reponseText: 'Mécanisme, aspect, localisation', isCorrect: false},
				{ reponseText: 'Aspect, douleur, étendue, localisation', isCorrect: true},
				{ reponseText: 'Couleur, forme, étendue, profondeur', isCorrect: false },
				{ reponseText: 'Gravité, douleur, cause', isCorrect: false },
			],
		},
		{
			questionTexte: 'Avec quoi peut-on emballer une brûlure ?',
			reponseOptions: [
				{ reponseText: 'Un drap stérile', isCorrect: true },
				{ reponseText: 'Un vêtement', isCorrect: false },
				{ reponseText: 'Un mouchoir', isCorrect: false },
				{ reponseText: 'Un pansement pour brûlés', isCorrect: true },
			],
		},
		{
			questionTexte: 'Pour une brulure de 2e degrès superciel, de quelle couleur est la peau?',
			reponseOptions: [
				{ reponseText: 'Rouge', isCorrect: false },
				{ reponseText: 'Rouge-Rose', isCorrect: true},
				{ reponseText: 'Rouge mat avec des zones pâles', isCorrect: false },
				{ reponseText: 'Parcheminée, beige, brune, noire', isCorrect: false },
			],
		},
		{
			questionTexte: 'Dans quel cas faut-il prevenir les secours?',
			reponseOptions: [
                { reponseText: 'Toujours', isCorrect: false },
				{ reponseText: 'Apparition de cloques', isCorrect: false },
				{ reponseText: 'Absence de douleur et de sensibilité', isCorrect: true},
				{ reponseText: 'Rougeur et douleur', isCorrect: false },
			],
        },
		{
			questionTexte: 'Face à une brulure peu grave et de petite taille, il faut la mettre ',
			reponseOptions: [
                { reponseText: 'Sous de l eau chaude à 20° pendant 20 min', isCorrect: false },
				{ reponseText: 'Sous de l eau tiède à 15° pendant 15 min', isCorrect: true },
				{ reponseText: 'Sous de l eau froide à 10° pendant 10 min', isCorrect: false },
				{ reponseText: 'Sous de l eau glacé jusqu à ne plus avoir mal', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [essai, setEssai]=useState(1);

	// Fonction qui reinitialise le quizz si le joueur decide de recommencer
	function reset() {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(false);
		setEssai(essai - 1);
		if(essai===0)
		{
			navigate("/ExplicationBrulure");
		}
	}

	// Fonction qui fait augmenter le nombre de vie sauvée
	function AugmenteVie(){
		if (score>=3)
		{
			dispatch({ vie: state.vie + 1 })
		}
	}

	const handlereponseOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
        }
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}

	};
	return (
		<div className='quizz'>
			{showScore ? (
				<div className='score-section'>
					<p>Ton score est de {score} sur {questions.length}</p>
                    {score>3 && <div style={{color:'green'}}> Niveau validé! <button className='validation' onClick={AugmenteVie}><Link style={{color:'black',textDecoration:'none'}} to="/ExplicationBrulure">Voir l'explication</Link></button></div>}
                    {score<=3 && <div> <p>Niveau pas validé! Vous pouvez recommencer!</p><button className='validation'onClick={() => reset()}>Recommencer</button></div>}
                    <p>Nombre d'essai restant: {essai}</p>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-compteur'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
					<div className='question-texte'>{questions[currentQuestion].questionTexte}</div>
					</div>
					<div className='reponse-section'>
						{questions[currentQuestion].reponseOptions.map((reponseOption) => (
							<button className='bouton-quizz' onClick={() => handlereponseOptionClick(reponseOption.isCorrect)}>{reponseOption.reponseText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
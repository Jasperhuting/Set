// /*
// shape: rechthoek, ellipse, golf
// color: rood, paars, groen
// amount: 3,2,1
// filling: open, closed, hatched
// 81 kaarten
// GIT https://github.com/Jasperhuting/Set.git
// */

// const lc = lc || {
// 	selected: [],
// 	set: 0,
// 	cardSet: {},
// 	deckSize: 12,
// 	numbers: [],
// 	size: 0,
// 	players: [],
// 	score: 0,
// 	amountPlayers: 0,
// 	possibilites: [],
// 	shuffle: function(set) {
// 		for (let i = set.length; i; i--) {
// 			let randomNumber = Math.floor(Math.random() * i);
// 			[set[i - 1], set[randomNumber]] = [set[randomNumber], set[i - 1]];
// 		}
// 	},
// 	// setConsoleVisible: function(data, notification, time) {
// 	// 	if (notification === 'error') {
// 	// 		$('.console').addClass('error').removeClass('success').removeClass('warning');
// 	// 	}
// 	// 	if (notification === 'warning') {
// 	// 		$('.console').addClass('warning').removeClass('error').removeClass('success');
// 	// 	}
// 	// 	if (notification === 'success') {
// 	// 		$('.console').addClass('success').removeClass('error').removeClass('warning');
// 	// 	}
// 	// 	$('.console').html(data);
// 	// 	$('.console').addClass('visible');
// 	// 	setTimeout(function() {
// 	// 		$('.console').removeClass('visible');
// 	// 	}, time);
// 	// },
// 	getCards: function() {
// 		fetch('https://jasperhuting.nl/set/cards.json', {
// 		method: 'get'
// 	}).then(function(data) {
// 		lc.cardSet = data;
// 		$.ajax({
// 			url:lc.shuffle(lc.cardSet),
// 			success:function(){
// 				lc.generateCards(lc.cardSet);
// 				lc.setPlayers(lc.players);
// 			}
// 		});
// 	}).catch(function(err) {
// 		console.log(err);
// 	});
// },
// setPlayers: function(players) {
// 	const count = players.length;
// 	const divContainer = document.createElement('div');
// 	divContainer.className = 'row';
// 	for (let i = 0; i < players.length; i++) {
// 		const player = document.createElement('div');
// 		if (count === 1) {
// 			const score = document.createElement('div');
// 			score.className = 'score';
// 			player.className = 'player col-xs-12';
// 		} else if (count === 2) {
// 			player.className = 'player col-xs-6';
// 		} else if (count === 3) {
// 			player.className = 'player col-xs-6 col-sm-4';
// 		} else if (count === 4) {
// 			player.className = 'player col-xs-6 col-sm-6 col-md-3 ';
// 		}
// 		player.innerHTML = players[i];
// 		if (score) {
// 			player.appendChild(score);
// 		}
// 		divContainer.appendChild(player);
// 	}
// 	$(".gameUsers").html(divContainer);
// },
// setScore: function(score) {
// 	if (score) {
// 		lc.score++;
// 	} else {
// 		lc.score--;
// 	}
// 	$('.score').html(lc.score);
// },
// getAllCombinations: function() {

// 	// Create an array that holds numbers from 1 ... 6.
// 	const array = [];
// 	for (let i = 0; i < $(".deck .card").length; i++) {
// 		array[i] = i;
// 	}
// 	lc.possibilites = [];

// 	// Select only 3 cards out of the $(".deck .card").length balls at a time ...
// 	lc.getAllPossibleCombinations(array, 3, lc.possibilites);

// },
// getAllPossibleCombinations: function (array, size, output) {
// 	lc.getCombinations(array, size, 0, [], output);
// },
// getCombinations: function (array, size, start, initialStuff, output) {
// 	if (initialStuff.length >= size) {
// 		lc.possibilites.push(initialStuff);
// 	} else {
// 		var i;

// 		for (i = start; i < array.length; ++i) {
// 			lc.getCombinations(array, size, i + 1, initialStuff.concat(array[i]), output);
// 		}
// 	}
// },
// generateCards: function(data) {
// 	if (data.length > lc.deckSize) {
// 		for(var i = 0; i < lc.deckSize; i++) {
// 			$.ajax({
// 				url:lc.createCard(data[i]),
// 				success:function(){
// 					data.splice(0, 1);
// 				}
// 			});
// 		}
// 	} else {
// 		if (data.length === 0) {
// 			console.log('The deck is running out of cards');
// 			lc.setConsoleVisible('<span>The deck is running out of cards</span>', 'warning', 2000);
// 		} else {
// 			for(let i = 0; i < data.length; i++) {
// 				$.ajax({
// 					url:lc.createCard(data[i]),
// 					success:function(){
// 						data.splice(0, 1);
// 					}
// 				});
// 			}
// 			$(".more").remove();
// 		}
// 	}

// },
// initPlayers: function() {
// 	for (var i = 0; i < lc.amountPlayers; i++) {
// 		lc.players.push($('.cardContainer.names').children()[i].value);
// 	}
// },
// checkIfPossibilities: function (data) {
// 	const elem = [];
// 	for (var i = 0; i < lc.possibilites.length; i++) {

// 		elem[0] = data[lc.possibilites[i][0]];
// 		elem[1] = data[lc.possibilites[i][1]];
// 		elem[2] = data[lc.possibilites[i][2]];

// 		const element_0 = {'amount':elem[0].dataset.amount,'color':elem[0].dataset.color,'filling':elem[0].dataset.filling,'shape':elem[0].dataset.shape};
// 		const element_1 = {'amount':elem[1].dataset.amount,'color':elem[1].dataset.color,'filling':elem[1].dataset.filling,'shape':elem[1].dataset.shape};
// 		const element_2 = {'amount':elem[2].dataset.amount,'color':elem[2].dataset.color,'filling':elem[2].dataset.filling,'shape':elem[2].dataset.shape};

// 		var checkThis = [element_0,element_1,element_2];

// 		lc.checkIfSet(checkThis, true)
// 	}


// },
// createCard: function (data) {
// 	var div = document.createElement('div');
// 	div.className = 'card col-xs-4 col-sm-4 col-md-3 col-lg-3';
// 	div.dataset.color = data.color;
// 	div.dataset.amount = data.amount;
// 	div.dataset.filling = data.filling;
// 	div.dataset.shape = data.shape;
// 	var divContainer = document.createElement('div');
// 	divContainer.className = 'cardContainer';

// 	var span = document.createElement('span');
// 	span.dataset.text = data.color+' '+data.filling+' '+data.amount+' '+data.shape;
// 	divContainer.appendChild(span);
// 	div.appendChild(divContainer);
// 	$(".deck").append(div);
// },
// fillDeck: function() {
// 	// lc.cardSet.splice()
// },
// replaceCards: function(elem) {
// 	for (var i = 0; i < elem.length; i++) {
// 		$("[data-color='"+elem[i].color+"'][data-amount='"+elem[i].amount+"'][data-filling='"+elem[i].filling+"'][data-shape='"+elem[i].shape+"']").remove();
// 	}
// },
// checkIfSet: function(elem, check) {
// 	lc.set = 0;
// 	// check shape
// 	if (elem[0].shape == elem[1].shape && elem[0].shape == elem[2].shape && elem[2].shape == elem[1].shape && elem[0].shape != null && elem[2].shape != null && elem[1].shape != null) {
// 		// console.log('set on shape');
// 		lc.set += 1;
// 	} else if(elem[0].shape !== elem[1].shape && elem[0].shape !== elem[2].shape && elem[2].shape !== elem[1].shape) {
// 		// console.log('set on shape all different');
// 		lc.set += 1;
// 	}

// 	// check color
// 	if (elem[0].color == elem[1].color && elem[0].color == elem[2].color && elem[2].color == elem[1].color && elem[0].color != null && elem[2].color != null && elem[1].color != null) {
// 		// console.log('set on color');
// 		lc.set += 1;
// 	} else if(elem[0].color !== elem[1].color && elem[0].color !== elem[2].color && elem[2].color !== elem[1].color) {
// 		// console.log('set on color all different');
// 		lc.set += 1;
// 	}

// 	// check filling
// 	if (elem[0].filling == elem[1].filling && elem[0].filling == elem[2].filling && elem[2].filling == elem[1].filling && elem[0].filling != null && elem[2].filling != null && elem[1].filling != null) {
// 		// console.log('set on filling');
// 		lc.set += 1;
// 	}  else if(elem[0].filling !== elem[1].filling && elem[0].filling !== elem[2].filling && elem[2].filling !== elem[1].filling) {
// 		// console.log('set on filling all different');
// 		lc.set += 1;
// 	}

// 	// check amount
// 	if (elem[0].amount == elem[1].amount && elem[0].amount == elem[2].amount && elem[2].amount == elem[1].amount && elem[0].amount != null && elem[2].amount != null && elem[1].amount != null) {
// 		// console.log('set on amount');
// 		lc.set += 1;
// 	} else if(elem[0].amount !== elem[1].amount && elem[0].amount !== elem[2].amount && elem[2].amount !== elem[1].amount) {
// 		// console.log('set on amount all different');
// 		lc.set += 1;
// 	}

// 	if (lc.set === 4) {
// 		if (!check) {
// 			lc.replaceCards(elem);
// 			lc.getAllCombinations();
// 		} else {
// 			lc.help++;
// 			console.log(elem);
// 			lc.setConsoleVisible(elem, 'warning', 6000);
// 		}
// 		return true;
// 	} else {
// 		return false;
// 	}


// },
// resetSelected: function() {
// 	lc.selected = [];
// 	$(".card").removeClass('selected');
// 	lc.set = 0;
// },
// }




// $(document).ready(function() {
// 	// lc.getCards();


// 	function isSet(state) {
// 		if (state) {
// 			// alert('SET!')
// 			lc.setScore(true);
// 			lc.setConsoleVisible('<span>SET :)</span>', 'success', 3000);
// 		} else {
// 			// alert('helaas :(');
// 			lc.setScore(false);
// 			lc.setConsoleVisible('<span>Helaas :(</span>', 'warning', 2000);
// 		}
// 		setTimeout(function() {
// 			lc.resetSelected();
// 		}, 500);
// 	}

// 	$("body").on('click', '.help', function () {
// 		if ($(".deck .card").length > 0) {
// 			console.clear()
// 			lc.getAllCombinations();
// 			lc.help = 0;
// 			$.ajax({
// 				url:lc.checkIfPossibilities($(".deck .card")),
// 				success:function(){
// 					if (lc.help == 0) {
// 						lc.setConsoleVisible('<span>Geen set gevonden</span>', 'warning', 2000);
// 						console.log('geen set gevonden');
// 					} else {
// 						lc.setConsoleVisible('<span>Er zit nog een set in!</span>', 'warning', 2000);
// 						console.log('er zit nog een set in!');
// 					}
// 				}
// 			});
// 		} else {
// 			lc.setConsoleVisible('<span>Start eerst het spel</span>', 'error', 2000);
// 			console.log('Start eerst het spel');
// 		}


// 	});

// 	$('body').on('click', '.set', function () {
// 		// if (lc.amountPlayers > 0 && lc.players.length > 0) {
// 		//     $(".popup").show();
// 		// }
// 	});

// 	$(".popup").on('click', '.card', function () {
// 		$(".popup").hide();
// 	});
// 	$(document).on('keypress', '.names input', function() {
// 		$(".startGame .startGame").text('Start the game!');
// 	});
// 	$('.options').on('click', '.card.option', function() {
// 		lc.amountPlayers = $(this).children().data('players');
// 		$('[data-players]').parent().removeClass('selected');
// 		$(this).addClass('selected');
// 		$('.names').parent().remove();
// 		const count = $(this).children().data('players');
// 		for (var i = 0; i < $(this).children().data('players'); i++) {
// 			var div = document.createElement('div');

// 			if (count === 1) {
// 				div.className = 'card col-xs-12';
// 				$(".startGame .startGame").text('Vul je naam in');
// 			} else if (count === 2) {
// 				$(".startGame .startGame").text('Vul de namen in');
// 				div.className = 'card col-xs-12 col-sm-6';
// 			} else if (count === 3) {
// 				$(".startGame .startGame").text('Vul de namen in');
// 				div.className = 'card col-xs-12 col-sm-4';
// 			} else if (count === 4) {
// 				$(".startGame .startGame").text('Vul de namen in');
// 				div.className = 'card col-xs-12 col-sm-6 col-md-3 ';
// 			}


// 			var divContainer = document.createElement('div');
// 			divContainer.className = 'cardContainer names';
// 			var input = document.createElement('input');
// 			input.className = 'form-control';
// 			input.type = 'text';
// 			divContainer.appendChild(input);
// 			div.appendChild(divContainer);
// 			$(".row.options").append(div);
// 		}
// 	});
// 	$('.colorsets').on('click', '[data-colorset]', function () {
// 		$("body")[0].dataset.cardColorset = $(this).data().colorset;
// 		$('[data-colorset]').removeClass('active');
// 		$(this).addClass('active');
// 	});
// 	$('.gameHelp').on('click', '.colorset', function () {
// 		var colorset = $("body")[0].dataset.cardColorset;
// 		$('[data-colorset]').removeClass('active');
// 		$('[data-colorset="' + colorset + '"]').addClass('active');
// 		if ($('.colorsets').is(':visible')) {
// 			$(this).html('Change colors');
// 			$('.colorsets').hide();
// 		} else {
// 			$('.colorsets').show();
// 			$(this).html('Close');
// 		}
// 	});
// 	$('.row').on('click', '.cardContainer.startGame', function () {
// 		if ($('[data-players]').parent().hasClass('selected')) {
// 			lc.players = [];
// 			$.ajax({
// 				url:lc.initPlayers(),
// 				success:function(){
// 					lc.getCards();
// 					lc.getAllCombinations();
// 					$('.options').children().remove();
// 					$(this).parent().remove();
// 					$('.moreContainer').removeClass('hide').addClass('show');
// 					$('.card.startGame').remove();
// 				}
// 			});

// 		} else {
// 			console.log('Kies eerst met hoeveel spelers je wilt spelen!')
// 		}

// 	});
// 	$('.row').on('click', 'div.moreContainer.show', function () {
// 		lc.getAllCombinations();
// 		lc.help = 0;
// 		$.ajax({
// 			url:lc.checkIfPossibilities($(".deck .card")),
// 			success:function(){
// 				if (lc.help == 0) {
// 					lc.generateCards(lc.cardSet);
// 				} else {
// 					lc.setConsoleVisible('<span>Er zit nog een set in!</span>', 'warning', 2000);
// 					console.log('Er zit nog een set in!');
// 				}
// 			}
// 		});



// 	});
// 	$('.deck').on('click', 'div.card', function() {
// 		if (jQuery.inArray( $(this).data(), lc.selected ) < 0) {
// 			if (lc.selected.length < 3) {
// 				lc.selected.push($(this).data());
// 				$(this).addClass('selected');
// 			}
// 		} else {
// 			for (var i = 0; lc.selected.length; i++) {
// 				if (lc.selected[i].shape == $(this).data().shape && lc.selected[i].color == $(this).data().color && lc.selected[i].amount == $(this).data().amount && lc.selected[i].filling == $(this).data().filling) {
// 					lc.selected.splice(i, 1);
// 					$(this).removeClass('selected');
// 					return false;
// 				}
// 			}
// 		}
// 		if (lc.selected.length == 3) {
// 			isSet(lc.checkIfSet(lc.selected, false));
// 		}

// 	});


// });
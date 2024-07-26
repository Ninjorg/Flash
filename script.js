

const vocabulary = [
    { word: "Abate", definition: "to reduce in amount, degree, or severity" },
    { word: "Abet", definition: "to assist or encourage, especially in wrongdoing" },
    { word: "Abhor", definition: "to regard with horror or loathing; to hate deeply" },
    { word: "Abstruse", definition: "difficult to understand; obscure" },
    { word: "Accede", definition: "to agree or consent" },
    { word: "Acquiesce", definition: "to accept without protest; to agree or submit" },
    { word: "Acrid", definition: "harsh in taste or odor; sharp in manner or temper" },
    { word: "Admonish", definition: "to warn or reprimand someone firmly" },
    { word: "Adroit", definition: "skillful, expert in the use of the hands or mind" },
    { word: "Adulation", definition: "excessive praise or admiration" },
    { word: "Aesthetic", definition: "pertaining to beauty" },
    { word: "Alleviate", definition: "to relieve, make more bearable" },
    { word: "Aloof", definition: "not friendly or forthcoming; cool and distant" },
    { word: "Ameliorate", definition: "to improve, make better" },
    { word: "Amicable", definition: "peaceable, friendly" },
    { word: "Anachronism", definition: "something out of place in time" },
    { word: "Anecdote", definition: "a short and amusing or interesting story about a real incident or person" },
    { word: "Antipathy", definition: "a strong dislike, hostile feeling" },
    { word: "Apathy", definition: "a lack of feeling, emotion, or interest" },
    { word: "Aptitude", definition: "a natural ability to do something" },
    { word: "Ardent", definition: "very enthusiastic, impassioned" },
    { word: "Arid", definition: "extremely dry" },
    { word: "Ascertain", definition: "to find out for certain" },
    { word: "Assiduous", definition: "persistent, attentive, diligent" },
    { word: "Astute", definition: "shrewd, crafty, showing practical wisdom" },
    { word: "Atypical", definition: "not typical, abnormal" },
    { word: "Audacious", definition: "bold, adventurous, recklessly daring" },
    { word: "Austere", definition: "severe or stern in manner; without adornment or luxury" },
    { word: "Avarice", definition: "a greedy desire, particularly for wealth" },
    { word: "Avid", definition: "desirous of something to the point of greed; intensely eager" },
    { word: "Banal", definition: "so lacking in originality as to be obvious and boring" },
    { word: "Belie", definition: "to contradict, to give a false impression" },
    { word: "Belligerent", definition: "hostile and aggressive" },
    { word: "Benign", definition: "kind and gentle" },
    { word: "Bequeath", definition: "to give or pass on as an inheritance" },
    { word: "Berate", definition: "to scold sharply" },
    { word: "Blatant", definition: "obvious; too conspicuous" },
    { word: "Brevity", definition: "shortness" },
    { word: "Bucolic", definition: "pertaining to the countryside; rural; rustic" },
    { word: "Burgeon", definition: "to grow and flourish" },
    { word: "Cacophony", definition: "a harsh, discordant mixture of sounds" },
    { word: "Cadence", definition: "rhythmic flow of a sequence of sounds or words" },
    { word: "Cajole", definition: "to persuade with false promises and flattery" },
    { word: "Candid", definition: "truthful and straightforward; frank" },
    { word: "Capricious", definition: "given to sudden and unaccountable changes of mood or behavior" },
    { word: "Castigate", definition: "to punish or criticize harshly" },
    { word: "Censure", definition: "to criticize harshly" },
    { word: "Chagrin", definition: "embarrassment; a complete loss of courage" },
    { word: "Chastise", definition: "to inflict physical punishment as a means of correction; to scold severely" },
    { word: "Chicanery", definition: "the use of trickery to achieve a political, financial, or legal purpose" },
    { word: "Churlish", definition: "rude in a mean-spirited and surly way" },
    { word: "Clandestine", definition: "secret, concealed; underhanded" },
    { word: "Coerce", definition: "to compel, force" },
    { word: "Cogent", definition: "forceful, convincing; relevant, to the point" },
    { word: "Complacent", definition: "self-satisfied; overly content" },
    { word: "Conciliatory", definition: "intended or likely to placate or pacify" },
    { word: "Concur", definition: "to be of the same opinion; to agree with" },
    { word: "Condescend", definition: "to show feelings of superiority; to patronize" },
    { word: "Conflagration", definition: "a large destructive fire" },
    { word: "Conjecture", definition: "an opinion or conclusion formed on the basis of incomplete information" },
    { word: "Connoisseur", definition: "an expert in matters of culture, food, or wine" },
    { word: "Conspicuous", definition: "easily seen or noticed" },
    { word: "Contemptuous", definition: "feeling hatred; scornful" },
    { word: "Contentious", definition: "quarrelsome, inclined to argue" },
    { word: "Contrite", definition: "feeling regret for having committed some wrongdoing" },
    { word: "Conundrum", definition: "a difficult problem; a dilemma" },
    { word: "Copious", definition: "abundant; plentiful" },
    { word: "Corroborate", definition: "to support with evidence" },
    { word: "Credible", definition: "believable" },
    { word: "Culpable", definition: "deserving blame, worthy of condemnation" },
    { word: "Curtail", definition: "to cut short or reduce" },
    { word: "Dauntless", definition: "showing fearlessness and determination" },
    { word: "Debacle", definition: "a complete failure; a total collapse" },
    { word: "Debilitate", definition: "to weaken" },
    { word: "Decorous", definition: "proper; in good taste" },
    { word: "Decry", definition: "to criticize openly" },
    { word: "Deference", definition: "humble submission and respect" },
    { word: "Deleterious", definition: "harmful" },
    { word: "Delineate", definition: "to describe accurately" },
    { word: "Demagogue", definition: "a leader who exploits popular prejudices and false claims and promises in order to gain power" },
    { word: "Demur", definition: "to object or take exception to; an objection" },
    { word: "Denounce", definition: "to condemn openly" },
    { word: "Deplete", definition: "to use up gradually" },
    { word: "Depravity", definition: "moral corruption, a wicked or perverse act" },
    { word: "Deride", definition: "to ridicule, laugh at with contempt" },
    { word: "Despondent", definition: "in low spirits from loss of hope or courage" },
    { word: "Despot", definition: "a dictator with absolute power" },
    { word: "Destitute", definition: "extremely poor; lacking necessities like food and shelter" },
    { word: "Detrimental", definition: "harmful; damaging" },
    { word: "Deviate", definition: "to turn aside from a course; to stray" },
    { word: "Dexterous", definition: "skillful in the use of hands or body; clever" },
    { word: "Didactic", definition: "intended to teach, particularly in having moral instruction as an ulterior motive" },
    { word: "Diffident", definition: "lacking self-confidence; shy" },
    { word: "Dilatory", definition: "tending to delay or procrastinate" },
    { word: "Diminutive", definition: "very small" },
    { word: "Discern", definition: "to see clearly, recognize" },
    { word: "Discrepancy", definition: "a difference; a lack of agreement" },
    { word: "Disdain", definition: "to regard with scorn" },
    { word: "Disparage", definition: "to belittle, speak slightingly of; to undervalue" },
    { word: "Disparate", definition: "fundamentally different; entirely unlike" },
    { word: "Disseminate", definition: "to scatter or spread widely" },
    { word: "Dissident", definition: "someone who disagrees" },
    { word: "Dissonance", definition: "a harsh and disagreeable combination, especially of sounds" },
    { word: "Divergent", definition: "going in different directions; different from each other; departing from conversation, deviant" },
    { word: "Divulge", definition: "to tell, reveal; to make public" },
    { word: "Dogmatic", definition: "stubbornly opinionated" },
    { word: "Dormant", definition: "inactive, sleeping" },
    { word: "Dubious", definition: "hesitating or doubting" },
    { word: "Duplicity", definition: "treachery, deceitfulness" },
    { word: "Ebullient", definition: "enthusiastic" },
    { word: "Eccentric", definition: "unconventional and slightly strange" },
    { word: "Eclectic", definition: "selecting from or made up from a variety of sources" },
    { word: "Efficacious", definition: "effective, producing results" },
    { word: "Effrontery", definition: "shameless boldness" },
    { word: "Egregious", definition: "outstandingly bad" },
    { word: "Elicit", definition: "to draw forth, bring out from some source" },
    { word: "Elucidate", definition: "to make clear" },
    { word: "Embellish", definition: "to decorate, adorn, touch up; to improve by adding details" },
    { word: "Emulate", definition: "to imitate with the intent of equaling or surpassing the model" },
    { word: "Enervate", definition: "to weaken" },
    { word: "Engender", definition: "to produce, cause, or bring about" },
    { word: "Enigma", definition: "a puzzle; a mystery" },
    { word: "Ephemeral", definition: "lasting a very short time" },
    { word: "Equanimity", definition: "composure; calmness" },
    { word: "Equivocal", definition: "ambiguous; intentionally misleading" },
    { word: "Erudite", definition: "scholarly, learned, bookish, pedantic" },
    { word: "Esoteric", definition: "intended for or understood by only a small group" },
    { word: "Evanescent", definition: "vanishing, soon passing away; light and airy" },
    { word: "Exacerbate", definition: "to make worse" },
    { word: "Exculpate", definition: "to clear from blame; prove innocent" },
    { word: "Exigent", definition: "urgent; requiring immediate action" },
    { word: "Exonerate", definition: "to free from blame" },
    { word: "Exorbitant", definition: "unreasonably high; excessive" },
    { word: "Expedient", definition: "convenient and practical, although possibly improper or immoral" },
    { word: "Expiate", definition: "to make amends for" },
    { word: "Expunge", definition: "to erase or eliminate" },
    { word: "Extant", definition: "still in existence" },
    { word: "Extol", definition: "to praise highly" },
    { word: "Extricate", definition: "to free from a difficult or tangled situation" },
    { word: "Exuberant", definition: "full of unrestrained enthusiasm or joy" },
    { word: "Facetious", definition: "treating serious issues with deliberately inappropriate humor" },
    { word: "Fallacious", definition: "false; misleading" },
    { word: "Fatuous", definition: "silly, foolish" },
    { word: "Fervent", definition: "having or displaying a passionate intensity" },
    { word: "Flippant", definition: "not showing a serious or respectful attitude" },
    { word: "Fortuitous", definition: "happening by chance or accident" },
    { word: "Fractious", definition: "tending to be troublesome; unruly, quarrelsome, contrary; unpredictable" },
    { word: "Garrulous", definition: "excessively talkative" },
    { word: "Germane", definition: "relevant, appropriate, apropos, fitting" },
    { word: "Grandiloquent", definition: "pompous or high-flown in speech" },
    { word: "Gratuitous", definition: "unnecessary or uncalled for" },
    { word: "Gregarious", definition: "outgoing; sociable" },
    { word: "Guile", definition: "sly or cunning intelligence" },
    { word: "Hackneyed", definition: "used so often as to lack freshness or originality" },
    { word: "Hapless", definition: "unlucky" },
    { word: "Harangue", definition: "a lengthy and aggressive speech" },
    { word: "Haughty", definition: "arrogant, condescending" },
    { word: "Heinous", definition: "very wicked, offensive, hateful" },
    { word: "Heretic", definition: "a person believing in or practicing religious heresy" },
    { word: "Hiatus", definition: "a gap, opening, break" },
    { word: "Histrionic", definition: "overly dramatic, theatrical" },
    { word: "Hoary", definition: "very old; whitish or gray from age" },
    { word: "Iconoclast", definition: "one who opposes established beliefs, customs, and institutions" },
    { word: "Idiosyncrasy", definition: "a peculiar personality trait" },
    { word: "Illicit", definition: "illegal" },
    { word: "Immaculate", definition: "spotless; perfect" },
    { word: "Immutable", definition: "unchangeable" },
    { word: "Impecunious", definition: "having little or no money" },
    { word: "Imperious", definition: "arrogantly domineering or overbearing" },
    { word: "Impetuous", definition: "acting or done quickly and without thought or care" },
    { word: "Inane", definition: "without sense or meaning; silly" },
    { word: "Inchoate", definition: "in an initial stage; not fully formed" },
    { word: "Incisive", definition: "sharp, keen, penetrating (with a suggestion of decisiveness and effectiveness)" },
    { word: "Incorrigible", definition: "not able to be corrected; beyond control" },
    { word: "Indefatigable", definition: "tireless" },
    { word: "Indigenous", definition: "native to a certain area" },
    { word: "Indigent", definition: "poor, needy" },
    { word: "Ineffable", definition: "inexpressible" },
    { word: "Inept", definition: "unskilled; clumsy" },
    { word: "Inexorable", definition: "impossible to stop or prevent" },
    { word: "Ingenuous", definition: "innocent, simple; frank, sincere" },
    { word: "Inimical", definition: "hostile, unfriendly" },
    { word: "Iniquity", definition: "an evil or wicked act" },
    { word: "Insidious", definition: "intended to deceive or entrap; sly, treacherous" },
    { word: "Insipid", definition: "lacking interest or flavor" },
    { word: "Intrepid", definition: "very brave, fearless, unshakable" },
    { word: "Inundate", definition: "to flood, overflow; to overwhelm by numbers or size" },
    { word: "Invective", definition: "an emotionally violent, verbal denunciation or attack using strong, abusive language" },
    { word: "Inveterate", definition: "firmly established, long-standing; habitual" },
    { word: "Irascible", definition: "easily angered" },
    { word: "Jocular", definition: "humorous, jesting, jolly, joking" },
    { word: "Judicious", definition: "sensible; showing good judgement" },
    { word: "Juxtapose", definition: "to place side by side for comparison" },
    { word: "Laconic", definition: "using few words" },
    { word: "Lambaste", definition: "to trash verbally or physically" },
    { word: "Languid", definition: "slow, sluggish, listless, weak" },
    { word: "Latent", definition: "hidden, present but not realized" },
    { word: "Lethargic", definition: "acting in an indifferent or slow, sluggish manner" },
    { word: "Loquacious", definition: "talkative" },
    { word: "Lugubrious", definition: "looking or sounding sad and dismal" },
    { word: "Magnanimous", definition: "generous in forgiving, above small meanness" },
    { word: "Malevolent", definition: "spiteful, showing ill will" },
    { word: "Malleable", definition: "capable of being shaped" },
    { word: "Martinet", definition: "a strict disciplinarian" },
    { word: "Maudlin", definition: "overly sentimental" },
    { word: "Maverick", definition: "one who is independent and resists adherence to a group" },
    { word: "Mellifluous", definition: "sweetly flowing" },
    { word: "Mendacious", definition: "lying; false; deceitful" },
    { word: "Meticulous", definition: "extremely careful; particular about details" },
    { word: "Misanthrope", definition: "a person who dislikes others" },
    { word: "Mitigate", definition: "to make milder or softer, to moderate in force or intensity" },
    { word: "Mollify", definition: "to calm or make less severe" },
    { word: "Morose", definition: "having a gloomy or sullen manner; not friendly or sociable" },
    { word: "Mundane", definition: "ordinary" },
    { word: "Myriad", definition: "a very large number" },
    { word: "Nadir", definition: "lowest point" },
    { word: "Nefarious", definition: "wicked, depraved, devoid of moral standards" },
    { word: "Neophyte", definition: "beginner" },
    { word: "Noisome", definition: "offensive, disgusting" },
    { word: "Noxious", definition: "harmful; poisonous; lethal" },
    { word: "Obdurate", definition: "stubborn" },
    { word: "Obfuscate", definition: "to confuse; to bewilder" },
    { word: "Oblivious", definition: "forgetful; unaware" },
    { word: "Obsequious", definition: "overly submissive and eager to please" },
    { word: "Obstinate", definition: "stubborn; unyielding" },
    { word: "Obviate", definition: "to anticipate and prevent; to remove, dispose of" },
    { word: "Occlude", definition: "to stop up; to prevent the passage of" },
    { word: "Odious", definition: "extremely unpleasant; repulsive" },
    { word: "Officious", definition: "excessively eager to deliver unasked-for or unwanted help" },
    { word: "Onerous", definition: "burdensome; heavy; hard to endure" },
    { word: "Opaque", definition: "impossible to see through; preventing the passage of light" },
    { word: "Opulent", definition: "wealthy, luxurious; ample; grandiose" },
    { word: "Ostensible", definition: "professed but not necessarily true" },
    { word: "Ostentatious", definition: "showy, pretentious" },
    { word: "Palliate", definition: "to reduce the severity of" },
    { word: "Palpable", definition: "capable of being touched or felt" },
    { word: "Panacea", definition: "a remedy for all ills; cure-all; an answer to all problems" },
    { word: "Paragon", definition: "a model of excellence or perfection" },
    { word: "Pariah", definition: "an outcast" },
    { word: "Parochial", definition: "local; narrow; limited" },
    { word: "Parsimonious", definition: "stingy, miserly; meager, poor, small" },
    { word: "Pathos", definition: "a quality that evokes pity or sadness" },
    { word: "Paucity", definition: "scarcity" },
    { word: "Pedantic", definition: "tending to show off one's learning" },
    { word: "Pellucid", definition: "transparent; clear" },
    { word: "Penchant", definition: "a strong attraction or inclination" },
    { word: "Penury", definition: "extreme poverty" },
    { word: "Perfunctory", definition: "done without care; in a routine fashion" },
    { word: "Perspicacious", definition: "wise; insightful; acutely intelligent" },
    { word: "Pertinacious", definition: "holding firmly, even stubbornly, to a belief" },
    { word: "Pervasive", definition: "spread throughout every part" },
    { word: "Petulant", definition: "peevish, annoyed by trifles, easily irritated and upset" },
    { word: "Phlegmatic", definition: "calm and unemotional in temperament" },
    { word: "Pithy", definition: "brief and full of meaning and substance; concise" },
    { word: "Placate", definition: "to appease, soothe, pacify" },
    { word: "Platitude", definition: "a commonplace, stale, or trite remark" },
    { word: "Plethora", definition: "excess" },
    { word: "Polemic", definition: "an aggressive argument against a specific opinion" },
    { word: "Portend", definition: "to indicate beforehand that something is about to happen; to give advance warning of" },
    { word: "Pragmatic", definition: "practical, as opposed to idealistic" },
    { word: "Precarious", definition: "Dangerous; risky; lacking in security or stability" },
    { word: "Precipitate", definition: "to cause or happen before anticipated or required" },
    { word: "Precocious", definition: "showing unusually early development (especially in talents and mental capacity)" },
    { word: "Predilection", definition: "preference" },
    { word: "Prevaricate", definition: "to lie or deviate from the truth" },
    { word: "Proclivity", definition: "a natural or habitual inclination or tendency" },
    { word: "Profligate", definition: "recklessly extravagant or wasteful in the use of resources" },
    { word: "Prolific", definition: "abundantly productive" },
    { word: "Propensity", definition: "a natural inclination or tendency" },
    { word: "Propitiate", definition: "to conciliate; to appease" },
    { word: "Prosaic", definition: "dull" },
    { word: "Protean", definition: "readily changing form or character" },
    { word: "Prudent", definition: "wise, careful, cautious" },
    { word: "Puerile", definition: "childish" },
    { word: "Pugnacious", definition: "quarrelsome, fond of fighting" },
    { word: "Pulchritude", definition: "beauty" },
    { word: "Punctilious", definition: "Paying strict attention to detail; extremely careful" },
    { word: "Quandary", definition: "a state of perplexity or doubt" },
    { word: "Quell", definition: "to subdue, put down forcibly" },
    { word: "Querulous", definition: "peevish, complaining, fretful" },
    { word: "Quiescent", definition: "inactive; at rest" },
    { word: "Quintessential", definition: "the most typical, ideal, or important" },
    { word: "Rancor", definition: "bitter resentment or ill-will" },
    { word: "Rapacious", definition: "aggressively greedy or grasping" },
    { word: "Raucous", definition: "making or constituting a disturbingly harsh and loud noise" },
    { word: "Rebuff", definition: "to reject bluntly" },
    { word: "Recalcitrant", definition: "stubbornly disobedient, resisting authority" },
    { word: "Recant", definition: "to withdraw a statement or belief to which one has previously been committed, renounce, retract" },
    { word: "Recondite", definition: "exceeding ordinary knowledge and understanding" },
    { word: "Redoubtable", definition: "inspiring fear or awe" },
    { word: "Refractory", definition: "stubbornly resistant to authority or control" },
    { word: "Relegate", definition: "assign to a lower position" },
    { word: "Remonstrate", definition: "to argue with someone against something, protest against" },
    { word: "Renounce", definition: "to give up or resign something" },
    { word: "Replete", definition: "full; abundant" },
    { word: "Reprehensible", definition: "deserving blame or punishment" },
    { word: "Reprove", definition: "to scold or criticize" },
    { word: "Repudiate", definition: "to reject the validity of" },
    { word: "Rescind", definition: "to repeal, cancel" },
    { word: "Reticent", definition: "not revealing one's thoughts or feelings readily" },
    { word: "Ribald", definition: "humorous in a vulgar way" },
    { word: "Rife", definition: "abundant" },
    { word: "Ruminate", definition: "think deeply about something" },
    { word: "Sacrosanct", definition: "sacred" },
    { word: "Sagacious", definition: "wise" },
    { word: "Salient", definition: "most noticeable or important" },
    { word: "Sanctimonious", definition: "making a show of being morally superior to other people" },
    { word: "Sanguine", definition: "cheerful; optimistic" },
    { word: "Sardonic", definition: "grimly or scornfully mocking, bitterly sarcastic" },
    { word: "Scurrilous", definition: "coarsely abusive; vulgar" },
    { word: "Sedulous", definition: "persistent, showing industry and determination" },
    { word: "Servile", definition: "overly submissive" },
    { word: "Soporific", definition: "sleep-inducing" },
    { word: "Spurious", definition: "not genuine, not true, not valid" },
    { word: "Staid", definition: "serious and dignified; quiet or subdued in character or conduct" },
    { word: "Stolid", definition: "unemotional; lacking sensitivity" },
    { word: "Strident", definition: "harsh sounding; grating" },
    { word: "Stymie", definition: "to block; to thwart" },
    { word: "Subjugate", definition: "to conquer by force, bring under complete control" },
    { word: "Sublime", definition: "of such excellence, grandeur, or beauty as to inspire great admiration or awe" },
    { word: "Substantiate", definition: "to support with proof or evidence" },
    { word: "Sycophant", definition: "a flatterer; one who fawns on others in order to gain favor" },
    { word: "Taciturn", definition: "silent; not talkative" },
    { word: "Tawdry", definition: "showy but cheap and of poor quality" },
    { word: "Tepid", definition: "lukewarm" },
    { word: "Terse", definition: "brief and to the point" },
    { word: "Timorous", definition: "fearful" },
    { word: "Tirade", definition: "long, harsh speech or verbal attack" },
    { word: "Torpor", definition: "extreme mental and physical sluggishness" },
    { word: "Tortuous", definition: "winding, twisted, crooked; highly involved, complex; devious" },
    { word: "Tractable", definition: "easily managed or controlled" },
    { word: "Transitory", definition: "temporary; lasting a brief time" },
    { word: "Trepidation", definition: "fear, fright, trembling" },
    { word: "Truculent", definition: "fierce and cruel; eager to fight" },
    { word: "Turpitude", definition: "depravity, moral corruption" },
    { word: "Ubiquitous", definition: "present, appearing, or found everywhere" },
    { word: "Umbrage", definition: "offense; resentment" },
    { word: "Unctuous", definition: "exaggeratedly or insincerely polite" },
    { word: "Urbane", definition: "refined in manner or style, suave" },
    { word: "Vacillate", definition: "to waver; to sway indecisively" },
    { word: "Vacuous", definition: "lacking ideas or intelligence" },
    { word: "Vapid", definition: "offering nothing that is stimulating or challenging" },
    { word: "Vehement", definition: "showing strong feeling; forceful, passionate, or intense" },
    { word: "Venal", definition: "open to or marked by bribery or corruption" },
    { word: "Veracity", definition: "truthfulness" },
    { word: "Verbose", definition: "wordy, very talkative" },
    { word: "Verdant", definition: "green in tint or color; immature in experience or judgment" },
    { word: "Vestige", definition: "a trace or evidence of something that once existed" },
    { word: "Vilify", definition: "to malign, to defame, to utter abusive statements against" },
    { word: "Viscous", definition: "thick; sticky" },
    { word: "Vitriolic", definition: "bitter, sarcastic; highly caustic or biting" },
    { word: "Vociferous", definition: "loud and noisy; compelling attention" },
    { word: "Voracious", definition: "having a huge appetite, greedy, ravenous; excessively eager" },
    { word: "Wane", definition: "to decrease gradually" },
    { word: "Wanton", definition: "reckless; heartless, unjustifiable; loose in morals" },
    { word: "Winsome", definition: "charming, pleasing" },
    { word: "Wistful", definition: "having or showing a feeling of vague or regretful longing" },
    { word: "Zealous", definition: "enthusiastic" },
    { word: "Zenith", definition: "the highest point; peak" }
]
const flashcard = document.getElementById('flashcard');
const wordElement = flashcard.querySelector('.front h1');
const definitionElement = flashcard.querySelector('.back h2');

let currentCardIndex = 0;

function showNextFlashcard() {

    currentCardIndex = Math.floor(Math.random() * vocabulary.length); // Loop back to the first card
    
    const currentCard = vocabulary[currentCardIndex];
    wordElement.textContent = currentCard.word;
    definitionElement.textContent = currentCard.definition;
    
    currentCardIndex++;
}

// Show the first flashcard initially
showNextFlashcard();

// Add a click event listener to the flashcard to show the next card when clicked
flashcard.addEventListener('click', showNextFlashcard);

document.getElementById("refreshButton").addEventListener("click", function() {
    showNextFlashcard();
});

// document.getElementById("refreshButton").addEventListener("click", function() {
//     var flashcard = document.getElementById("flashcard");
//     flashcard.classList.toggle("flipped");
// });

// Selecting the refresh button and flashcard
const refreshButton = document.getElementById("refreshButton");

// Function to handle showing definition
let showDefinitionTimeout;

function showDefinition(word) {
    const definition = vocabulary.find(item => item.word === word).definition;
    flashcard.querySelector(".back").textContent = definition;
    flashcard.classList.add("flipped");
}

// Function to handle keydown events
function handleKeydown(event) {
    // If right arrow key is pressed, trigger refresh button click
    if (event.code === "ArrowRight") {
        refreshButton.click();
    }
}


// Adding event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

//Have example sentences for each word

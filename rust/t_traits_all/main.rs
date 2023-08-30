use std::fmt::Debug;

struct Monster {
	health:i32,
}

#[derive(Debug)]
struct Wizard {
	health:i32,
}

#[derive(Debug)]
struct Ranger {
	health:i32,
}

trait Magic {} //These traits have no implementation. They work as trait bounds for functions.
trait FightClose {}
trait FightFromDistance {}

impl FightClose for Ranger {}
impl FightClose for Wizard {}
impl FightFromDistance for Ranger {}
impl Magic for Wizard {}

fn attack_with_bow<T:FightFromDistance+Debug>(character:&T,opponent:&mut Monster,distance:u32) {
	if distance < 10 {
		opponent.health -= 10;
		println!("Your attack with your bow. Your opponent now has {} health left. You are at: {:?}.",opponent.health,character);
	}
}

fn attack_with_sword<T:FightClose+Debug>(character:&T,opponent:&mut Monster) {
	opponent.health -= 10;
	println!("Your attack with your sword. Your opponent now has {} health left. You are at: {:?}",opponent.health,character);
}

fn fireball<T:Magic+Debug>(character:&T,opponent:&mut Monster,distance:u32) {
	if distance < 15 {
		opponent.health -= 20;
		println!("You raise your hands and cast a fireball. Your opponent has {} health left. You are now {:?}.",opponent.health,character)
	}
}

fn main() {
	let radagast = Wizard {health:60};
	let aragorn = Ranger {health:80};
	
	let mut uruk_hai = Monster {health:40};
	
	attack_with_sword(&radagast,&mut uruk_hai);
	attack_with_bow(&aragorn,&mut uruk_hai,8);
	fireball(&radagast,&mut uruk_hai,12);
}
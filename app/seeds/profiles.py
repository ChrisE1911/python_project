from app.models import db, Profile, environment, SCHEMA

def seed_profiles():
    demo = Profile(
        user_id=1, city="Chicago", state="IL", occupation="demolition man", gender="Man", sexual_orientation="Straight", height="5'6", religion="Agnosticism", political_affiliation="Moderate", language="Korean", kids="Doesn't have kids but might want them", pets="Doesn't have pet(s)", diet="Omnivore", smoker="Smokes cigarettes regularly", drinker="Drinks often", marijuana="Smokes marijuana often", zodiac="Virgo", ethnicity="Asian", body_type="Jacked", education_level="Trade/tech school", bio="I'm here to party."
    )
    marnie = Profile(
        user_id=2, city="Houston", state="TX", occupation="cowgirl", gender="Woman", sexual_orientation="Lesbian", height="5'8", religion="Atheism", political_affiliation="Other political beliefs", language="English", kids="Doesn't have kids and doesn't want them", pets="Has dog(s)", diet="Vegetarian", smoker="Smokes cigarettes sometimes", drinker="Drinks sometimes", marijuana="Never smokes marijuana", zodiac="Aries", ethnicity="White", body_type="Fit", education_level="High school", bio="Howdy y'all. Nice to meet ya."
    )
    bobbie = Profile(
        user_id=3, city="New York", state="NY", occupation="banker", gender="Man", sexual_orientation="Bisexual", height="5'0", religion="Other religion", political_affiliation="Conservative", language="German", kids="Has kid(s) and doesn't want more", pets="Has other pet(s)", diet="Ketogenic", smoker="Doesn't smoke cigarettes", drinker="Drinks often", marijuana="Never smokes marijuana", zodiac="Pisces", ethnicity="Other ethnicity", body_type="Average build", education_level="Graduate degree", bio="I have lots of money. Please love me"
    )
    alex = Profile(
        user_id=4, city="Los Angeles", state="California", occupation="doctor", gender="Nonbinary", sexual_orientation="Asexual", height="5'5", religion="Buddhism", political_affiliation="Liberal", language="French", kids="Doesn't have kids and doesn't want the", pets="Has dog(s)", diet="Intermittent Fasting", smoker="Doesn't smoke cigarettes", drinker="Doesn't drink", marijuana="Smokes marijuana sometimes", zodiac="Gemini", ethnicity="White", body_type="A little extra", education_level="In grad school", bio="If this is going to work eat your veggies"
    )
    sarah = Profile(
        user_id=5, city="Seattle", state="WA", occupation="jedi", gender="Woman", sexual_orientation="Straight", height="6'0", religion="Other religion", political_affiliation="Other political beliefs", language="English", kids="Doesn't have kids but might want them", pets="Has other pet(s)", diet="Vegan", smoker="Doesn't smoke cigarettes", drinker="Doesn't drink", marijuana="Never smokes marijuana", zodiac="Cancer", ethnicity="Pacific Islander", body_type="Curvy", education_level="In college", bio="May the force be with you"
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(alex)
    db.session.add(sarah)
    db.session.commit()

def undo_profiles():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.profiles RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM profiles")

    db.session.commit()

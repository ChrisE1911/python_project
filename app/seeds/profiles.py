from app.models import db, Profile, environment, SCHEMA


def seed_profiles():
    demo = Profile(
        user_id=1, age=23, city="Chicago", state="IL", occupation="demolition man", gender="Man", sexual_orientation="Straight", height="5'6", religion="Agnosticism", political_affiliation="Moderate", language="Korean", kids="Doesn't have kids but might want them", pets="Doesn't have pet(s)", diet="Omnivore", smoker="Smokes cigarettes regularly", drinker="Drinks often", marijuana="Smokes marijuana often", zodiac="Virgo", ethnicity="Asian", body_type="Jacked", education_level="Trade/tech school", bio="I'm here to party."
    )
    marnie = Profile(
        user_id=2, age=28, city="Houston", state="TX", occupation="cowgirl", gender="Woman", sexual_orientation="Lesbian", height="5'8", religion="Atheism", political_affiliation="Other political beliefs", language="English", kids="Doesn't have kids and doesn't want them", pets="Has dog(s)", diet="Vegetarian", smoker="Smokes cigarettes sometimes", drinker="Drinks sometimes", marijuana="Never smokes marijuana", zodiac="Aries", ethnicity="White", body_type="Fit", education_level="High school", bio="Howdy y'all. Nice to meet ya."
    )
    bobbie = Profile(
        user_id=3, age=33, city="New York", state="NY", occupation="banker", gender="Man", sexual_orientation="Bisexual", height="5'0", religion="Other religion", political_affiliation="Conservative", language="German", kids="Has kid(s) and doesn't want more", pets="Has other pet(s)", diet="Ketogenic", smoker="Doesn't smoke cigarettes", drinker="Drinks often", marijuana="Never smokes marijuana", zodiac="Pisces", ethnicity="Other ethnicity", body_type="Average build", education_level="Graduate degree", bio="I have lots of money. Please love me"
    )
    alex = Profile(
        user_id=4, age=43, city="Los Angeles", state="California", occupation="doctor", gender="Nonbinary", sexual_orientation="Asexual", height="5'5", religion="Buddhism", political_affiliation="Liberal", language="French", kids="Doesn't have kids and doesn't want the", pets="Has dog(s)", diet="Intermittent Fasting", smoker="Doesn't smoke cigarettes", drinker="Doesn't drink", marijuana="Smokes marijuana sometimes", zodiac="Gemini", ethnicity="White", body_type="A little extra", education_level="In grad school", bio="If this is going to work eat your veggies"
    )
    sarah = Profile(
        user_id=5, age=30, city="Seattle", state="WA", occupation="jedi", gender="Woman", sexual_orientation="Straight", height="6'0", religion="Other religion", political_affiliation="Other political beliefs", language="English", kids="Doesn't have kids but might want them", pets="Has other pet(s)", diet="Vegan", smoker="Doesn't smoke cigarettes", drinker="Doesn't drink", marijuana="Never smokes marijuana", zodiac="Cancer", ethnicity="Pacific Islander", body_type="Curvy", education_level="In college", bio="May the force be with you"
    )
    v = Profile(
        user_id=6, age=25, city="Manhattan", state="NY", occupation="Singer", gender="Man", sexual_orientation="Straight", height="6'0", religion="Hinduism", political_affiliation="Conservative", language="English", kids="Doesn't have kids but might want them", pets="Doesn't have pet(s)", diet='Intermittent Fasting', smoker="Doesn't smoke cigarettes", drinker="Doesn't drink", marijuana="Never smokes marijuana", zodiac="Gemini", ethnicity="Asian", body_type="Overweight", education_level="Graduate degree", bio="I am the best. I can dance and I can cook"
    )
    jungkook = Profile(
        user_id=7,
        age=40,
        city='Philadelphia',
        state='PA',
        occupation='Singer',
        gender='Nonbinary',
        sexual_orientation='Homoflexible',
        height="5'7",
        religion='Buddhism',
        political_affiliation='Moderate',
        language='Malay',
        kids='Has kid(s) and might want more',
        pets="Has cat(s)",
        diet='Halal',
        smoker='Smokes cigarettes regularly',
        marijuana='Smokes marijuana often',
        zodiac='Libra',
        ethnicity='Native American',
        body_type='Jacked',
        education_level='In college',
        bio='I smoke 2 packs of cigarettes a day and that is how I became a great singer'
    )
    blake = Profile(
        user_id=8,
        age=21,
        city='Los Angeles',
        state='CA',
        occupation='Actor',
        gender='Nonbinary',
        sexual_orientation='Straight',
        height="5'7",
        religion='Judaism',
        political_affiliation='Moderate',
        language='Bulgarian',
        kids='Has kid(s) and might want more',
        pets="Has cat(s)",
        diet='Ketogenic',
        smoker='Smokes cigarettes regularly',
        drinker="Drinks sometimes",
        marijuana='Smokes marijuana often',
        zodiac='Libra',
        ethnicity='White',
        body_type='Full figured',
        education_level='In college',
        bio='I like to gossip. I love Mint Mobile'
    )
    beyonce = Profile(
        user_id=9,
        age=30,
        city='Brooklyn',
        state='NY',
        occupation='Businesswoman',
        gender='Woman',
        sexual_orientation='Questioning',
        height="4'10",
        religion='Atheism',
        political_affiliation='Conservative',
        language='Albanian',
        kids="Doesn't have kids and doesn't want them",
        pets="Has cat(s)",
        diet='Omnivore',
        smoker='Smokes cigarettes regularly',
        drinker="Doesn't drink",
        marijuana='Smokes marijuana often',
        zodiac='Sagittarius',
        ethnicity='Native American',
        body_type='Jacked',
        education_level='Undergraduate degree',
        bio="All the single ladies (All the single ladies), All the single ladies (All the single ladies), All the single ladies, Now put your hands up"
    )
    kim = Profile(
        user_id=10,
        age=35,
        city='Beverly Hills',
        state='CA',
        occupation='Model',
        gender='Woman',
        sexual_orientation='Asexual',
        height="<4'0",
        religion='Sikh',
        political_affiliation='Conservative',
        language='English',
        kids="Doesn't have kids and doesn't want them",
        pets="Has cat(s)",
        diet='Gluten Free',
        smoker='Smokes cigarettes regularly',
        drinker="Doesn't drink",
        marijuana='Smokes marijuana often',
        zodiac='Capricorn',
        ethnicity='Middle Eastern',
        body_type='Thin',
        education_level='In grad school',
        bio="Please do not message me if you own Yeezy shoes"
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(alex)
    db.session.add(sarah)

    db.session.add(v)
    db.session.add(jungkook)
    db.session.add(blake)
    db.session.add(beyonce)
    db.session.add(kim)

    db.session.commit()


def undo_profiles():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.profiles RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM profiles")

    db.session.commit()

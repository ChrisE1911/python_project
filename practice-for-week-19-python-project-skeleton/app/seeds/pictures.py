from app.models import db, Picture, environment, SCHEMA

def seed_pictures():
    demo = Picture(
        user_id= 1, url="https://imgs.search.brave.com/bHEPdjQKfAHBv3O5s08zHojS4OWSdBATvseO4gPWONs/rs:fit:1000:740:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjk2NjUyNTM1Njkt/NmQwMWMwZWFmN2I2/P2l4bGliPXJiLTEu/Mi4xJml4aWQ9ZXlK/aGNIQmZhV1FpT2pF/eU1EZDkmdz0xMDAw/JnE9ODA", is_profile_pic=True
    )
    marnie = Picture(
        user_id= 2, url="https://imgs.search.brave.com/bHEPdjQKfAHBv3O5s08zHojS4OWSdBATvseO4gPWONs/rs:fit:1000:740:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjk2NjUyNTM1Njkt/NmQwMWMwZWFmN2I2/P2l4bGliPXJiLTEu/Mi4xJml4aWQ9ZXlK/aGNIQmZhV1FpT2pF/eU1EZDkmdz0xMDAw/JnE9ODA", is_profile_pic=True
    )
    bobbie = Picture(
        user_id= 3, url="https://imgs.search.brave.com/bHEPdjQKfAHBv3O5s08zHojS4OWSdBATvseO4gPWONs/rs:fit:1000:740:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjk2NjUyNTM1Njkt/NmQwMWMwZWFmN2I2/P2l4bGliPXJiLTEu/Mi4xJml4aWQ9ZXlK/aGNIQmZhV1FpT2pF/eU1EZDkmdz0xMDAw/JnE9ODA", is_profile_pic=True
    )
    alex = Picture(
        user_id= 4, url="https://imgs.search.brave.com/bHEPdjQKfAHBv3O5s08zHojS4OWSdBATvseO4gPWONs/rs:fit:1000:740:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjk2NjUyNTM1Njkt/NmQwMWMwZWFmN2I2/P2l4bGliPXJiLTEu/Mi4xJml4aWQ9ZXlK/aGNIQmZhV1FpT2pF/eU1EZDkmdz0xMDAw/JnE9ODA", is_profile_pic=True
    )
    sarah = Picture(
        user_id= 5, url="https://imgs.search.brave.com/bHEPdjQKfAHBv3O5s08zHojS4OWSdBATvseO4gPWONs/rs:fit:1000:740:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjk2NjUyNTM1Njkt/NmQwMWMwZWFmN2I2/P2l4bGliPXJiLTEu/Mi4xJml4aWQ9ZXlK/aGNIQmZhV1FpT2pF/eU1EZDkmdz0xMDAw/JnE9ODA", is_profile_pic=True
    )

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(alex)
    db.session.add(sarah)
    db.session.commit()

def undo_pictures():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.pictures RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pictures")

    db.session.commit()

from app.models import db, Picture, environment, SCHEMA


def seed_pictures():
    demo = Picture(
        profile_id=1, picture_url="https://imgs.search.brave.com/bHEPdjQKfAHBv3O5s08zHojS4OWSdBATvseO4gPWONs/rs:fit:1000:740:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Mjk2NjUyNTM1Njkt/NmQwMWMwZWFmN2I2/P2l4bGliPXJiLTEu/Mi4xJml4aWQ9ZXlK/aGNIQmZhV1FpT2pF/eU1EZDkmdz0xMDAw/JnE9ODA", is_profile_pic=True
    )
    marnie = Picture(
        profile_id=2, picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.B11_voPOF9YTZA58URRZZwHaEK%26pid%3DApi&f=1&ipt=e9aeb6c6bd4b8896118a8f15202dcafc3f90f07aafbdbdc6f0cad24ee4c7f047&ipo=images", is_profile_pic=True
    )
    bobbie = Picture(
        profile_id=3, picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.HqmL_u1rhnuD3TAs5oc30QHaGL%26pid%3DApi&f=1&ipt=ac7f662c89facd5595f236ca517028f27313ed117c6fcd1bd66f1995f171db6c&ipo=images", is_profile_pic=True
    )
    alex = Picture(
        profile_id=4, picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WpxcYLpjbq2eeHSrqRzk0QHaKv%26pid%3DApi&f=1&ipt=b42f1b26237a952621d9c5b53d4a25fafb043f5021e62fa3936621037f89d01d&ipo=images", is_profile_pic=True
    )
    sarah = Picture(
        profile_id=5, picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.raAnYBjeQHCDopK__2C_ZAHaK4%26pid%3DApi&f=1&ipt=5e31b8fc39be9029a684ee36ef5dcc53e468f7a66cec698bac9d4b6387201375&ipo=images", is_profile_pic=True
    )
    v = Picture(
        profile_id=6,
        picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4Cq7jebq35cqi9Qjv4CGwwHaD4%26pid%3DApi&f=1&ipt=c87198e191cc600f041ad36a20a42ab48830c71be93c53dde83e8e8bf37fd30a&ipo=images",
        is_profile_pic=True
    )
    jungkook = Picture(
        profile_id=7,
        picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.axkMBggDgXPvTcVwreRfkgHaE7%26pid%3DApi&f=1&ipt=1f28e26c53d06f7a02c8de1043383c06c80f825fcb1ac3cb68beebd58c72f46a&ipo=images",
        is_profile_pic=True
    )
    blake = Picture(
        profile_id=8,
        picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.jY5ZwHORcaSF9mT376DyrgHaLB%26pid%3DApi&f=1&ipt=916890a4d37601eab11a31eaedad5fe38d82a6646d300b1f7f3c1bd70ffd3f40&ipo=images",
        is_profile_pic=True
    )
    beyonce = Picture(
        profile_id=9,
        picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.2WYxc-rQhADMBPNAsL6f1gHaHa%26pid%3DApi&f=1&ipt=a53c87888771e250f3cc175a6c148f94955939907095d6d1b14505d097ebb3eb&ipo=images",
        is_profile_pic=True
    )
    kim = Picture(
        profile_id=10,
        picture_url="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Xuh0abtiG1piyjVF-BZBmQHaJQ%26pid%3DApi&f=1&ipt=1eaa0e526846b8cf169edb5aff12e97f2f74b0c49268946bbe5340155c2d4450&ipo=images",
        is_profile_pic=True
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


def undo_pictures():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.pictures RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pictures")

    db.session.commit()

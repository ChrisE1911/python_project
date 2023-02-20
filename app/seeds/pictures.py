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
    tim = Picture(
        profile_id=11,
        picture_url="https://imgs.search.brave.com/GvOMNPxV33-Pa2vAG7NTOpYRtMvwYzaKqv7MZ8Ynbc0/rs:fit:768:884:1/g:ce/aHR0cHM6Ly9naXJs/dGVyZXN0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8w/MS9IYXJyeS1TdHls/ZXMtNzY4eDg4NC5q/cGc",
        is_profile_pic=True
    )
    sam = Picture(
        profile_id=12,
        picture_url="https://imgs.search.brave.com/if3_1Tf_dD-mNnUGGEfwBElUxv5JImVCN689RNO0n1k/rs:fit:319:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/OGZ4dGhvbThLM3d5/YVdSLU9MTGNRSGFM/QSZwaWQ9QXBp",
        is_profile_pic=True
    )
    penny = Picture(
        profile_id=13,
        picture_url="https://imgs.search.brave.com/SS80-XoRTCxlb-6IOzp1jkSedavpk8MH0vBQwBrLzLQ/rs:fit:309:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC50/T2ZUV0hBczk1ck9S/VHdFTEtKVm9RSGFM/ViZwaWQ9QXBp",
        is_profile_pic=True
    )
    georgia = Picture(
        profile_id=14,
        picture_url="https://imgs.search.brave.com/HqdDO5Gab2sjOms6Grl-ewE4J00FBj_cO8VZZcjon04/rs:fit:351:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/a3YwV2I1VVZCbkdG/TGpBX3dEYWFnSGFL/QSZwaWQ9QXBp",
        is_profile_pic=True
    )
    matilda = Picture(
        profile_id=15,
        picture_url="https://imgs.search.brave.com/hc--UGy-qd17WUSPquG4K3jhSedjtKNT-XclZPV6OZs/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5D/QWJ1SFFtbV9vRFFn/dzVnY0RtR29BSGFM/SCZwaWQ9QXBp",
        is_profile_pic=True
    )
    lars = Picture(
        profile_id=16,
        picture_url="https://imgs.search.brave.com/tfNeZRCXDo3igZ3CxfL1eKURtfhK66KeKg7FJXWkZNk/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5I/cU52M21RdjR4NnZv/dnhJTjVWQV9RSGFM/SCZwaWQ9QXBp",
        is_profile_pic=True
    )
    michael = Picture(
        profile_id=17,
        picture_url="https://imgs.search.brave.com/aEQxdp4-8SdROJ0-FYgSOhynn0IauPCd0wyKPngtiDo/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/eklvdFlKRkFuRTV2/T3BGdENUNzVRSGFF/SyZwaWQ9QXBp",
        is_profile_pic=True
    )
    natasha = Picture(
        profile_id=18,
        picture_url="https://imgs.search.brave.com/IELbYx1GSu9EZ5eKxA7KxpVQSN4BZ_lH_PPgjm-gRwM/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/UE5CVGEwYm1aS1J0/LXdyNVlhVmVRSGFM/SCZwaWQ9QXBp",
        is_profile_pic=True
    )
    achmed = Picture(
        profile_id=19,
        picture_url="https://imgs.search.brave.com/OHOl_s0h52R7ArwTPtT8mZN6WMk5tsqMsn_vSHDpXfA/rs:fit:552:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC56/enhqUFRDR1JUdG5M/b2hlcDJiYjFRSGFH/WCZwaWQ9QXBp",
        is_profile_pic=True
    )
    nina = Picture(
        profile_id=20,
        picture_url="https://imgs.search.brave.com/3RDxdse1GW6QY5YbyyVCKc1YIUWg2bZjcGngFgqIMwg/rs:fit:334:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/RnhZY3VoNDNCcjdt/NUpvUklLMFhRSGFL/ZiZwaWQ9QXBp",
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
    db.session.add(tim)
    db.session.add(sam)
    db.session.add(penny)
    db.session.add(georgia)
    db.session.add(matilda)
    db.session.add(lars)
    db.session.add(michael)
    db.session.add(natasha)
    db.session.add(achmed)
    db.session.add(nina)

    db.session.commit()


def undo_pictures():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.pictures RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM pictures")

    db.session.commit()

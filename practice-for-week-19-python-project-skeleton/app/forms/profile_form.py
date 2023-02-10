from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, SelectField, SelectMultipleField
from wtforms.validators import DataRequired, Email, ValidationError



class ProfileForm(FlaskForm):
  city = StringField('City')
  state = StringField('State')
  occupation = StringField('Occupation')
  gender = SelectField('Gender', choices=['', 'Man', 'Woman', 'Nonbinary', ])
  sexual_orientation = SelectField('Sexual_Orientation', choices=['', 'Straight', 'Gay', 'Lesbian', 'Bisexual', 'Queer', 'Pansexual', 'Questioning', 'Heteroflexible', 'Homoflexible', 'Asexual', 'Gray-asexual', 'Demisexual', 'Reciprosexual', 'Akiosexual', 'Aceflux', 'Grayromantic', 'Demiromantic', 'Recipromantic', 'Akioromantic', 'Aroflux', ])
  height = SelectField('Height', choices=['', "-4'0", "4'1", "4'2", "4'3", "4'4", "4'5", "4'6", "4'7", "4'8", "4'9", "4'10", "4'11", "5'0", "5'1", "5'2", "5'3", "5'4", "5'5", "5'6", "5'7", "5'8", "5'9", "5'10", "5'11", "6'0", "6'1", "6'2", "6'3", "6'4", "6'5", "6'6", "6'7", "6'8", "6'9", "6'10", "6'11", "7'0+"])
  religion = SelectField('Religion', choices=['', 'Agnosticism', 'Atheism', 'Christianity', 'Judaism', 'Catholicism', 'Islam', 'Hinduism', 'Buddhism', 'Sikh', 'Other religion' ])
  political_affiliation = SelectField('Political Affiliation', choices=['', 'Liberal', 'Moderate', 'Conservative', 'Other political beliefs'])
  language = SelectMultipleField('Language', choices=['', 'English', 'Afrikaans', 'Albanian', 'Arabic', 'Armenian', 'Basque', 'Belarusian', 'Bengali', 'Breton', 'Bulgarian', 'Catalan', 'Cebuano', 'Chechen', 'Chinese', 'Chinese (Cantonese)', 'Chinese (Mandarin)', 'C++', 'Croatian', 'Czech', 'Danish', 'Dutch', 'Esperanto', 'Estonian', 'Finnish', 'French', 'Frisian', 'Georgian', 'German', 'Greek', 'Gujarati', 'Ancient Greek', 'Hawaiian', 'Hebrew', 'Hindi', 'Hungarian', 'Icelandic', 'Ilongo', 'Indonesian', 'Irish', 'Italian', 'Japanese', 'Khmer', 'Korean', 'Latin', 'Latvian', 'LISP', 'Lithuanian', 'Malay', 'Maori', 'Mongolian', 'Norwegian', 'Occitan', 'Other language', 'Persian', 'Polish', 'Portuguese', 'Punjabi', 'Romanian', 'Rotuman', 'Russian', 'Sanskrit', 'Sardinian', 'Serbian', 'Sign Language', 'Slovak', 'Slovenian', 'Spanish', 'Swahili', 'Swedish', 'Tagalog', 'Tamil', 'Thai', 'Tibetan', 'Turkish', 'Ukrainian', 'Urdu', 'Vietnamese', 'Welsh', 'Yiddish'])
  kids = SelectField('Kids', choices=['', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'])
  pets = SelectMultipleField('Pets', choices=['', "Doesn't have pet(s)", "Has other pet(s)", "Has cat(s)", "Has dog(s)"])
  diet = SelectField('Diet', choices=['', 'Omnivore', 'Vegetarian', 'Vegan', 'Kosher', 'Halal', 'Gluten Free', 'Pescatarian', 'Jain', 'Lactovegetarian', 'Intermittent Fasting', 'Ketogenic'])
  smoker = SelectField('Smoker', choices=['', 'Smokes cigarettes regularly', 'Smokes cigarettes sometimes', "Doesn't smoke cigarettes"])
  drinker = SelectField('Drinker', choices=['', 'Drinks often', 'Drinks sometimes', "Doesn't drink"])
  marijuana = SelectField('Marijuana', choices=['', 'Smokes marijuana often', 'Smokes marijuana sometimes', 'Never smokes marijuana'])
  zodiac = SelectField('Zodiac', choices=['', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'])
  income = SelectField('Yearly Income', choices=['', '10k-19k', '20k-29k', '30k-39k', '40k-49k', '50k-59k', '60k-69k', '70k-79k', '80k-89k', '90k-99k', '100k-109k', '110k-119k', '120k-129k', '130k-139k', '140k-149k', '150k+', ])
  relationship = SelectField('Relationship', choices=['', 'Monogamous', 'Non-monogamous', 'Open to either', ])
  # relationship_status = SelectField('Relationship Status', choices=['Single', 'Seeing someone', "It's complicated", 'In a relationship', 'Married', 'Divorced', ])
  ethnicity = SelectField('Ethnicity', choices=['', 'Asian', 'Black', 'Hispanic/Latin', 'Indian', 'Middle Eastern', 'Native American', 'Pacific Islander', 'White', 'Other ethnicity', ])
  body_type = SelectField('Body Type', choices=['', 'Thin', 'Overweight', 'Average build', 'Fit', 'Jacked', 'A little extra', 'Curvy', 'Full figured'])
  education_level = SelectField('Education Level', choices=['', 'High school', 'Trade/tech school', 'In college', 'Undergraduate degree', 'In grad school', 'Graduate degree'])
  biography = TextAreaField('Biography')

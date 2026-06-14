import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'frostora_project.settings')
django.setup()

from frostora_app.models import IceCreamFlavor, TeamMember, Event

# Create sample flavors
flavors_data = [
    {
        'name': 'Belgian Chocolate',
        'description': 'Indulge in the deep, luxurious taste of Belgian chocolate. Smooth and rich.',
        'ingredients': 'Dark chocolate, Cocoa powder, Milk cream',
        'category': 'signature',
        'is_featured': True,
    },
    {
        'name': 'Classic Vanilla',
        'description': 'Made with real vanilla beans and fresh milk, rich and creamy.',
        'ingredients': 'Vanilla beans, Real milk, Cream',
        'category': 'signature',
        'is_featured': True,
    },
    {
        'name': 'Pista Royale',
        'description': 'Premium pistachio flavored ice cream for a rich and nutty delight.',
        'ingredients': 'Pistachio paste, Milk cream, Natural flavoring',
        'category': 'premium',
        'is_featured': True,
    },
    {
        'name': 'Butterscotch Bliss',
        'description': 'A perfect blend of buttery sweetness and indulgent creaminess.',
        'ingredients': 'Butterscotch, Butter, Cream, Milk',
        'category': 'signature',
        'is_featured': True,
    },
    {
        'name': 'Strawberry Love',
        'description': 'Made with real strawberries for a fruity, refreshing taste.',
        'ingredients': 'Real strawberries, Milk cream, Sugar',
        'category': 'signature',
        'is_featured': False,
    },
    {
        'name': 'Black Currant',
        'description': 'Enjoying with the goodness of black currants, refined for a classy and delightful taste.',
        'ingredients': 'Black currant juice, Milk cream, Natural flavoring',
        'category': 'premium',
        'is_featured': False,
    },
]

# Create sample team members
team_data = [
    {
        'name': 'Arjun R',
        'position': 'Founder & CEO',
        'email': 'arjun@frostora.com',
        'bio': 'Visionary leader with passion for premium ice cream and customer satisfaction.',
    },
    {
        'name': 'Meera S',
        'position': 'Operations Head',
        'email': 'meera@frostora.com',
        'bio': 'Ensures smooth operations and maintains the highest standards across all facilities.',
    },
    {
        'name': 'Rohan K',
        'position': 'Production Head',
        'email': 'rohan@frostora.com',
        'bio': 'Quality-focused professional dedicated to crafting perfect ice cream every time.',
    },
    {
        'name': 'Priya M',
        'position': 'Marketing Head',
        'email': 'priya@frostora.com',
        'bio': 'Creative strategist building brand awareness and customer engagement.',
    },
]

# Create sample events
events_data = [
    {
        'title': 'Wedding Special',
        'description': 'Make your special day even sweeter with our custom ice cream flavors and elegant presentation.',
        'features': 'Custom flavors, Elegant packaging, Bulk orders, Delivery service',
        'pricing': 15000.00,
    },
    {
        'title': 'Corporate Events',
        'description': 'Impress your guests at corporate events with premium ice cream service.',
        'features': 'Customizable menu, Professional service, On-site serving, Multiple flavors',
        'pricing': 10000.00,
    },
    {
        'title': 'Birthday Parties',
        'description': 'Make birthday celebrations special with ice cream and special toppings.',
        'features': 'Themed packaging, Fun presentation, Bulk quantities, Home delivery',
        'pricing': 5000.00,
    },
]

print("Creating sample data...")

# Create flavors
for flavor_data in flavors_data:
    flavor, created = IceCreamFlavor.objects.get_or_create(
        name=flavor_data['name'],
        defaults=flavor_data
    )
    if created:
        print(f"✓ Created flavor: {flavor.name}")
    else:
        print(f"- Flavor already exists: {flavor.name}")

# Create team members
for member_data in team_data:
    member, created = TeamMember.objects.get_or_create(
        name=member_data['name'],
        defaults=member_data
    )
    if created:
        print(f"✓ Created team member: {member.name}")
    else:
        print(f"- Team member already exists: {member.name}")

# Create events
for event_data in events_data:
    event, created = Event.objects.get_or_create(
        title=event_data['title'],
        defaults=event_data
    )
    if created:
        print(f"✓ Created event: {event.title}")
    else:
        print(f"- Event already exists: {event.title}")

print("\n✅ Sample data setup complete!")

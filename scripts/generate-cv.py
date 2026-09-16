"""
Generates the Harvard-style resume PDF (public/juanse-calvino-cv.pdf) from
content mirrored off the portfolio site (About, Work Experience, Education,
Projects, Skills).

Usage:
    python3 -m venv scripts/venv
    scripts/venv/bin/pip install -r scripts/requirements.txt
    scripts/venv/bin/python scripts/generate-cv.py
"""

import os

from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    HRFlowable,
)

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(SCRIPT_DIR, "..", "public", "juanse-calvino-cv.pdf")

NAME = "Juanse Calviño"
TITLE = "Software Engineer"
EMAIL = "j.s.calvinio@gmail.com"
PHONE_E164 = "+5491167464778"
PHONE_LABEL = "+54 9 11 6746-4778"
GITHUB_URL = "https://github.com/juansecalvinio"
GITHUB_LABEL = "github.com/juansecalvinio"
LINKEDIN_URL = "https://www.linkedin.com/in/juansecalvinio/"
LINKEDIN_LABEL = "linkedin.com/in/juansecalvinio"
LOCATION = "Mar del Plata, Argentina"

LANGUAGES = [
    ("Spanish", "Native"),
    ("English", "B1"),
]


def link(url, label):
    return f'<link href="{url}"><u>{label}</u></link>'


SEP = "&nbsp;&nbsp;|&nbsp;&nbsp;"

CONTACT_LINE_1 = SEP.join(
    [
        LOCATION,
        link(f"tel:{PHONE_E164}", PHONE_LABEL),
        link(f"mailto:{EMAIL}", EMAIL),
    ]
)

CONTACT_LINE_2 = SEP.join(
    [
        link(GITHUB_URL, GITHUB_LABEL),
        link(LINKEDIN_URL, LINKEDIN_LABEL),
    ]
)

EXPERIENCE = [
    {
        "company": "Santander Tecnología",
        "role": "Software Engineer",
        "dates": "2020 – Present",
        "bullets": [
            "Developed web microfrontends with React and mobile microapps with React Native for the bank's Investments area.",
            "Built and maintained APIs using NestJS to support investment product features.",
            "Collaborated with cross-functional teams and external partners to design and ship new features, improving the user experience for investment products.",
        ],
    },
    {
        "company": "Montagne Outdoors",
        "role": "Web Developer",
        "dates": "2019 – 2020",
        "bullets": [
            "Improved the e-commerce platform by integrating the Mercado Pago API to enable card payments.",
            "Developed and maintained features using a PHP, SQL, and JavaScript stack.",
        ],
    },
    {
        "company": "Instituto Médico Alexander Fleming",
        "role": "Full Stack Developer",
        "dates": "2017 – 2019",
        "bullets": [
            "Modernized legacy applications by migrating to React and Node.js.",
            "Developed SQL queries, scheduled jobs, and reports using QlikView.",
        ],
    },
]

EDUCATION = [
    {
        "place": "Universidad Tecnológica Nacional",
        "career": "Higher Technical Certificate in Programming",
        "dates": "2011 – 2017",
    },
]

PROJECTS = [
    {
        "title": "tepidolacuenta",
        "url": "https://www.tepidolacuenta.site/",
        "kind": "Side Project",
        "description": "Web app that lets diners request their bill from their phone. Built with React and Go.",
    },
    {
        "title": "Aguila Turismo",
        "url": "https://www.aguilaturismoarg.com/",
        "kind": "Freelance",
        "description": "Landing page for a tourism agency. Built with Next.js, Tailwind CSS, and TypeScript.",
    },
]

SKILL_CATEGORIES = [
    ("Programming Languages", ["JavaScript", "TypeScript", "Go"]),
    ("Frameworks & Libraries", ["React", "React Native", "Next.js", "Node.js"]),
    ("Databases", ["PostgreSQL", "MongoDB"]),
    ("Cloud & DevOps", ["Docker", "AWS"]),
]

PAGE_MARGIN = 0.7 * inch

styles = {
    "name": ParagraphStyle(
        "name", fontName="Times-Bold", fontSize=18, leading=22, alignment=TA_CENTER
    ),
    "title": ParagraphStyle(
        "title", fontName="Times-Roman", fontSize=11, leading=14, alignment=TA_CENTER
    ),
    "contact": ParagraphStyle(
        "contact",
        fontName="Times-Roman",
        fontSize=9.5,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#333333"),
        linkUnderline=0,
    ),
    "section": ParagraphStyle(
        "section",
        fontName="Times-Bold",
        fontSize=11,
        leading=14,
        spaceBefore=10,
        spaceAfter=2,
        tracking=0.5,
    ),
    "entry_title": ParagraphStyle(
        "entry_title", fontName="Times-Bold", fontSize=10.5, leading=13
    ),
    "entry_date": ParagraphStyle(
        "entry_date",
        fontName="Times-Roman",
        fontSize=10.5,
        leading=13,
        alignment=2,  # right
    ),
    "entry_subtitle": ParagraphStyle(
        "entry_subtitle",
        fontName="Times-Italic",
        fontSize=10,
        leading=13,
        spaceAfter=2,
    ),
    "bullet": ParagraphStyle(
        "bullet",
        fontName="Times-Roman",
        fontSize=10,
        leading=13,
        leftIndent=14,
        bulletIndent=2,
        spaceAfter=2,
    ),
    "body": ParagraphStyle(
        "body", fontName="Times-Roman", fontSize=10, leading=13, spaceAfter=2
    ),
    "skill_line": ParagraphStyle(
        "skill_line", fontName="Times-Roman", fontSize=10, leading=15, spaceAfter=1
    ),
}


def section_heading(text):
    return [
        Paragraph(text.upper(), styles["section"]),
        HRFlowable(
            width="100%",
            thickness=0.75,
            color=colors.HexColor("#000000"),
            spaceAfter=6,
        ),
    ]


def entry_header(title_text, date_text):
    table = Table(
        [[Paragraph(title_text, styles["entry_title"]), Paragraph(date_text, styles["entry_date"])]],
        colWidths=["*", 1.6 * inch],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return table


def build():
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=LETTER,
        leftMargin=PAGE_MARGIN,
        rightMargin=PAGE_MARGIN,
        topMargin=PAGE_MARGIN,
        bottomMargin=PAGE_MARGIN,
        title=f"{NAME} - Resume",
        author=NAME,
    )

    story = []

    # Header
    story.append(Paragraph(NAME, styles["name"]))
    story.append(Paragraph(TITLE, styles["title"]))
    story.append(Spacer(1, 4))
    story.append(Paragraph(CONTACT_LINE_1, styles["contact"]))
    story.append(Paragraph(CONTACT_LINE_2, styles["contact"]))
    story.append(Spacer(1, 10))

    # Experience
    story += section_heading("Experience")
    for job in EXPERIENCE:
        story.append(entry_header(job["company"], job["dates"]))
        story.append(Paragraph(job["role"], styles["entry_subtitle"]))
        for bullet in job["bullets"]:
            story.append(Paragraph(f"•  {bullet}", styles["bullet"]))
        story.append(Spacer(1, 6))

    # Education
    story += section_heading("Education")
    for edu in EDUCATION:
        story.append(entry_header(edu["place"], edu["dates"]))
        story.append(Paragraph(edu["career"], styles["entry_subtitle"]))
    story.append(Spacer(1, 6))

    # Projects
    story += section_heading("Projects")
    for project in PROJECTS:
        story.append(
            entry_header(link(project["url"], project["title"]), project["kind"])
        )
        story.append(Paragraph(project["description"], styles["body"]))
        story.append(Spacer(1, 4))

    # Skills
    story += section_heading("Skills")
    for label, items in SKILL_CATEGORIES:
        story.append(
            Paragraph(f"<b>{label}:</b> {', '.join(items)}", styles["skill_line"])
        )
    story.append(Spacer(1, 6))

    # Languages
    story += section_heading("Languages")
    story.append(
        Paragraph(
            "&nbsp;&nbsp;|&nbsp;&nbsp;".join(
                f"{lang} — {level}" for lang, level in LANGUAGES
            ),
            styles["skill_line"],
        )
    )

    doc.build(story)
    print(f"Wrote {os.path.abspath(OUTPUT_PATH)}")


if __name__ == "__main__":
    build()

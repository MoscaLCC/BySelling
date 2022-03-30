
function limpaCompComp() {
    var myNode = document.getElementById("CompComp");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}


function compNome() {
    var z = document.getElementById("CompNome").options[document.getElementById("CompNome").selectedIndex].value

    limpaCompComp();

    if (z == 1) {
        var a = document.createElement('option');
        a.append("Anarruga liso, 99% Algodão, 1% Elastano")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Anarruga Strech, 98% Poliéster, 2% Elastano")
        b.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(b);
        var c = document.createElement('option');
        c.append("Anarruga Windy, 95% Algodão, 5% Poliéster")
        c.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(c);
    }
    if (z == 2) {
        var a = document.createElement('option');
        a.append("Brim Cru, 100% Algodão")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Brim Fortbrim Peletizado, 100% Algodão")
        document.getElementById("CompComp").appendChild(b);
        var c = document.createElement('option');
        c.append("Brim Santista Solasol, 100% Algodão")
        document.getElementById("CompComp").appendChild(c);
        var d = document.createElement('option');
        d.append("Brim Sarjado Profissional, 100% Algodão")
        document.getElementById("CompComp").appendChild(d);

    }
    if (z == 3) {
        var a = document.createElement('option');
        a.append("Cambraia Bordada Romantic, 80% Poliéster, 20% Algodão")
        a.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Cambraia de Algodão, 100% Algodão")
        document.getElementById("CompComp").appendChild(b);
        var c = document.createElement('option');
        c.append("Cambraia de lã, 100% Lã ou misto")
        document.getElementById("CompComp").appendChild(c);
    }
    if (z == 4) {
        var a = document.createElement('option');
        a.append("Cetim Alpaseda	, 100% Acetato")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Cetim Arco Íris C/glitter, 100% Poliéster")
        b.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(b);
        var c = document.createElement('option');
        c.append("Cetim Brocado, 100% Viscose")
        document.getElementById("CompComp").appendChild(c);
        var d = document.createElement('option');
        d.append("Cetim Chanel C/elastano, 97% Poliéster, 3% Elastano")
        d.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(d);
        var e = document.createElement('option');
        e.append("Cetim Changeant, 61% Viscose, 39% Poliéster")
        e.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(e);
        var f = document.createElement('option');
        f.append("Cetim Charmeuse Aveludado C/brilho, 100% Poliéster")
        e.setAttribute("value","poli")
        document.getElementById("CompComp").appendChild(f);
        var g = document.createElement('option');
        g.append("Cetim Charmeuse C/elastano, 97% Poliéster, 3% Elastano")
        document.getElementById("CompComp").appendChild(g);
        var h = document.createElement('option');
        h.append("Cetim Charmeuse Est. Viscose, 100% Viscose")
        document.getElementById("CompComp").appendChild(h);
        var i = document.createElement('option');
        i.append("Cetim de Lycra Advance, 86% Poliamida, 14% Elastano")
        document.getElementById("CompComp").appendChild(i);
        var j = document.createElement('option');
        j.append("Cetim de Seda Liso, 100% Seda")
        document.getElementById("CompComp").appendChild(j);
        var k = document.createElement('option');
        k.append("Cetim Duchese Liso, 100% Poliéster")
        document.getElementById("CompComp").appendChild(k);
        var l = document.createElement('option');
        l.append("Cetim Estampado Metalizado Pvc, 100% Poliéster P V C Metalizado")
        document.getElementById("CompComp").appendChild(l);
        var m = document.createElement('option');
        m.append("Cetim Estrela Liso, 100% Viscose")
        document.getElementById("CompComp").appendChild(m);
        var n = document.createElement('option');
        n.append("Cetim Italiano, 100% Poliéster")
        document.getElementById("CompComp").appendChild(n);
        var o = document.createElement('option');
        o.append("Cetim Laise Lurex 792, 68% Poliéster, 32% Metal")
        document.getElementById("CompComp").appendChild(o);
        var p = document.createElement('option');
        p.append("Cetim Layser, 75% Poliéster, 15% Metal, 10% Poliamida")
        document.getElementById("CompComp").appendChild(p);
        var q = document.createElement('option');
        q.append("Cetim Noir, 81% Poliéster, 19% Poliamida")
        document.getElementById("CompComp").appendChild(q);
        var r = document.createElement('option');
        r.append("Cetim Nylon Liso, 100% Poliamida")
        document.getElementById("CompComp").appendChild(r);
        var s = document.createElement('option');
        s.append("Cetim Paris Listrado, 100% Poliéster")
        document.getElementById("CompComp").appendChild(s);
        var t = document.createElement('option');
        t.append("Cetim Peau D'Ange Extra, 100% Poliéster")
        document.getElementById("CompComp").appendChild(t);
        var u = document.createElement('option');
        u.append("Cetim Vogue, 100% Poliéster")
        document.getElementById("CompComp").appendChild(u);
    }
    if (z == 5) {
        var a = document.createElement('option');
        a.append("Chamoix Verão,  100% Poliéster")
        document.getElementById("CompComp").appendChild(a);

    }

    if (z == 6) {
        var a = document.createElement('option');
        a.append("Charmeuse Estampado São Lucas, 100% Poliéster")
        document.getElementById("CompComp").appendChild(a);

    }
    if (z == 7) {
        var a = document.createElement('option');
        a.append("Chenille Liso, 63% Algodão, 37% Poliéster")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Chenille de algodão, 100%Algodão")
        document.getElementById("CompComp").appendChild(b);

    }
    if (z == 8) {
        var a = document.createElement('option');
        a.append("Chiffon Bordado Ananda, 100% Viscose")
        document.getElementById("CompComp").appendChild(a);
    }

    if (z == 9) {
        var a = document.createElement('option');
        a.append("Cotton Bandeira do Brasil, 100% Algodão")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Cotton Jacquard Etro, 100% Algodão")
        document.getElementById("CompComp").appendChild(b);
        var c = document.createElement('option');
        c.append("Cotton Plus Infantil, 50% Algodão, 50% Poliéster")
        document.getElementById("CompComp").appendChild(c);
        var d = document.createElement('option');
        d.append("Cotton Liso	92% Algodão/8% Elastano")
        document.getElementById("CompComp").appendChild(d);
    }
    if (z == 10) {
        var a = document.createElement('option');
        a.append("Crepe Albene, 100% Poliéstero")
        document.getElementById("CompComp").appendChild(a);
        var b = document.createElement('option');
        b.append("Crepe Av Estampado, 51% Algodão, 49% Viscose")
        document.getElementById("CompComp").appendChild(b);
        var c = document.createElement('option');
        c.append("Crepe Barcelona, 100% Poliéster")
        document.getElementById("CompComp").appendChild(c);
        var d = document.createElement('option');
        d.append("Crepe Bulgary, 100% Poliéster")
        document.getElementById("CompComp").appendChild(d);
        var e = document.createElement('option');
        e.append("Crepe Century, 74% Viscose, 26% Poliamida")
        document.getElementById("CompComp").appendChild(e);
        var f = document.createElement('option');
        f.append("Crepe Chanel Amassado, 100% Poliéster")
        document.getElementById("CompComp").appendChild(f);
        var g = document.createElement('option');
        g.append("Crepe Chiffon Bombay Metálico, 99% Poliéster, 1% Metal")
        document.getElementById("CompComp").appendChild(g);
        var h = document.createElement('option');
        h.append("Crepe Chiffon Estampado, 100% Poliéster")
        document.getElementById("CompComp").appendChild(h);
        var i = document.createElement('option');
        i.append("Crepe Chiffon Yoriu C/fio Metalico, 98% Poliéster, 2% Metal")
        document.getElementById("CompComp").appendChild(i);
        var j = document.createElement('option');
        j.append("Crepe Cloquet / Piquet, 56% Viscose, 44% Poliéster")
        document.getElementById("CompComp").appendChild(j);
        var k = document.createElement('option');
        k.append("Crepe de Viscose Five Star, 100% Viscose")
        document.getElementById("CompComp").appendChild(k);
        var l = document.createElement('option');
        l.append("Crepe Edwardian, 96,5%poliester, 3,5% Elastano")
        document.getElementById("CompComp").appendChild(l);
        var m = document.createElement('option');
        m.append("Crepe Estampado de Viscose, 100% Viscose")
        document.getElementById("CompComp").appendChild(m);
        var n = document.createElement('option');
        n.append("Crepe Firenze, 100% Poliéster")
        document.getElementById("CompComp").appendChild(n);
        var o = document.createElement('option');
        o.append("Crepe Georgette, 100% Poliéster")
        document.getElementById("CompComp").appendChild(o);
        var p = document.createElement('option');
        p.append("Crepe Granite Misto, 53% Algodão, 47% Poliéster")
        document.getElementById("CompComp").appendChild(p);
        var q = document.createElement('option');
        q.append("Crepe Ibiza Devorê, 80% Poliéster, 20% Algodão")
        document.getElementById("CompComp").appendChild(q);
        var r = document.createElement('option');
        r.append("Crepe Koshibo, 100% Poliéster")
        document.getElementById("CompComp").appendChild(r);
        var s = document.createElement('option');
        s.append("Crepe Koshibo C/elastano, 95% Poliéster, 5% Elastano")
        document.getElementById("CompComp").appendChild(s);
        var t = document.createElement('option');
        t.append("Crepe Liso, 100% Algodão")
        document.getElementById("CompComp").appendChild(t);
        var u = document.createElement('option');
        u.append("Crepe Londrino de Viscose, 52% Viscose, 42% Acetato")
        document.getElementById("CompComp").appendChild(u);
        var v = document.createElement('option');
        v.append("Crepe Madame channel, 100% Poliéster")
        document.getElementById("CompComp").appendChild(v);
        var x = document.createElement('option');
        x.append("Crepe Mireya 1116, 80% Poliéster, 20% Viscose")
        document.getElementById("CompComp").appendChild(x);
        var z = document.createElement('option');
        z.append("Crepe Mônaco Estampado, 54% Poliéster, 46% Algodão")
        document.getElementById("CompComp").appendChild(z);
        var aa = document.createElement('option');
        aa.append("Crepe Satin Lady Di, 72% Viscose, 28% Poliéster")
        document.getElementById("CompComp").appendChild(aa);
        var ab = document.createElement('option');
        ab.append("Crepe Satin Lady Di, 68% Viscose, 32% Poliamida")
        document.getElementById("CompComp").appendChild(ab);
        var ac = document.createElement('option');
        ac.append("Crepe Tiboly, 100% Poliéster")
        document.getElementById("CompComp").appendChild(ac);
        var ad = document.createElement('option');
        ad.append("Crepe Vesuvio, 80% Viscose/, 20% Poliamida")
        document.getElementById("CompComp").appendChild(ad);
        var ae = document.createElement('option');
        ae.append("Crepe Vogue, 100% Poliéster")
        document.getElementById("CompComp").appendChild(ae);
        var af = document.createElement('option');
        af.append("Crepe 2ª Pele	100% Poliéster")
        document.getElementById("CompComp").appendChild(af);
    }

    if (z == 11) {
        var a = document.createElement('option')
        a.append("Crepine Liso 1036	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
    }

    if (z == 12) {
        var a = document.createElement('option')
        a.append("Cretone Estampado Natalino	50% Algodão/50% Poliéster")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Cretone Mandi Alvejado	100% Algodão")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 13) {
        var a = document.createElement('option')
        a.append("Diolene	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
    }

    if (z == 14) {
        var a = document.createElement('option')
        a.append("Escaline Bordada Ypu 39331.14-8	73% Poliéster/27% Viscose")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Escaline Lisa	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 15) {
        var a = document.createElement('option')
        a.append("Feltro de Lã	100% Lã")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Feltro Feltycril	60% Poliéster/25% Acrílico/15% Polipropileno")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 16) {
        var a = document.createElement('option')
        a.append("Filó Americano	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Filó Estampado Metalizado	95% Poliamida/5% Metal")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 17) {
        var a = document.createElement('option')
        a.append("Flanela Estampada Infantil	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
    }

    if (z == 18) {
        var a = document.createElement('option')
        a.append("Fustão Cotelê Nova América	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
    }

    if (z == 19) {
        var a = document.createElement('option')
        a.append("Gabardine Alaska C/elastano	97% Poliéster/3% Elastano")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Gabardine Biasi	100% Poliéster	")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Gabardine C/ Elastano	97%poli[éster 3% Elastano")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Gabardine C/elastano	95% Poliéster/5% Elastano")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Gabardine Califórnia Peletizada	100% Poliéster")
        document.getElementById('CompComp').appendChild(e)
        var f = document.createElement('option')
        f.append("Gabardine Especial	100% Poliéster")
        document.getElementById('CompComp').appendChild(f)
        var g = document.createElement('option')
        g.append("Gabardine Gabarplus	75% Poliéster/25% Viscose")
        document.getElementById('CompComp').appendChild(g)
        var h = document.createElement('option')
        h.append("Gabardine Importado Poliester	100% Poliéster	")
        document.getElementById('CompComp').appendChild(h)
        var i = document.createElement('option')
        i.append("Gabardine Kinkle Free	100% Poliéster")
        document.getElementById('CompComp').appendChild(i)
        var j = document.createElement('option')
        j.append("Gabardine Liso	100% Algodão")
        document.getElementById('CompComp').appendChild(j)
        var k = document.createElement('option')
        k.append("Gabardine Liverpool	75% Poliéster/25% Viscose")
        document.getElementById('CompComp').appendChild(k)
        var l = document.createElement('option')
        l.append("Gabardine Menphis	100% Poliéster")
        document.getElementById('CompComp').appendChild(l)
        var m = document.createElement('option')
        m.append("Gabardine Paris	100% Poliéster	")
        document.getElementById('CompComp').appendChild(m)
        var n = document.createElement('option')
        n.append("Gabardine Menphis	100% Poliéster")
        document.getElementById('CompComp').appendChild(n)
        var o = document.createElement('option')
        o.append("Gabardine Renacel	67% Algodão/33% Poliéster")
        document.getElementById('CompComp').appendChild(o)
        var p = document.createElement('option')
        p.append("Gabardine Sarjada	78% Poliéster/22% Viscose	")
        document.getElementById('CompComp').appendChild(p)
        var q = document.createElement('option')
        q.append("Gabardine Usage	65% Poliéster/32% Algodão/3% Elastano")
        document.getElementById('CompComp').appendChild(q)
    }

    if (z == 20) {
        var a = document.createElement('option')
        a.append("Gazar Amassada	55% Poliamida/44% Poliéster")
        document.getElementById('CompComp').appendChild(a)
    }

    if (z == 21) {
        var a = document.createElement('option')
        a.append("Gorgurão Berlim Estampado	77% Algodão/23% Poliéster")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Gorgurão Berlim Liso	55% Algodão/45% Poliéster")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Gorgurão Berlim Liso Extra	78% Algodão/ 22% Poliéster")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Gorgurão C/ Desenho Colorido	60% Algodão 40% Poliéster")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Gorgurão Genova	58% Poliéster/42% Algodão")
        document.getElementById('CompComp').appendChild(e)
        var f = document.createElement('option')
        f.append("Gorgurão Jacquard 2000	60% Algodão/40% Poliéster")
        document.getElementById('CompComp').appendChild(f)
    }

    if (z == 22) {
        var a = document.createElement('option')
        a.append("Jacquard Damask Estampado C/elastano	97% Algodão/3% Elastano")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Jacquard Boston	70% Polipropileno/30% Poliéster	")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Jacquard Brocado Riviera	100% Poliéster")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Jacquard Bruxelas	51% Algodão/49% Poliéster")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Jacquard Soiree 800	56% Acetato/44% Poliéster")
        document.getElementById('CompComp').appendChild(e)
        var f = document.createElement('option')
        f.append("Jacquard Tinto Leticia	86% Poliéster/14% Viscose")
        document.getElementById('CompComp').appendChild(f)
        var g = document.createElement('option')
        g.append("Jacquard Vestuário	57% Poliéster/40% Viscose/3% Metal")
        document.getElementById('CompComp').appendChild(g)
    }
    if (z == 23) {
        var a = document.createElement('option')
        a.append("Jeans 8,0 Oz Pré Encolhido	100% Algodão")
        document.getElementById('CompComp').appendChild(a)
    }

    if (z == 24) {
        var a = document.createElement('option')
        a.append("Jersey Acetinado	100% poliamida")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Jersey Liso	100% Poliamida")
        document.getElementById('CompComp').appendChild(b)

    }

    if (z == 25) {
        var a = document.createElement('option')
        a.append("Juta Arrastão Alvejada	100% Juta")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Juta Colorida C/ouro	63% Juta/36% Algodão/1% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Juta Lisa Dublada C/ Forro	50% Juta/50% Algodão")
        document.getElementById("CompComp").appendChild(c)
    }
    if (z == 26) {
        var a = document.createElement('option')
        a.append("Laise Arp Puro Algodão 09177 Branca	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Laise Bordada Estampada	65% Poliester 35% Algodão	")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Laise de Organza 3028-000	70% Poliamida/30% Viscose")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Laise Importada 902766	80% Poliéster/20% Algodão")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Laise Lace Estampada	100% Algodão")
        document.getElementById("CompComp").appendChild(e)
    }
    if (z == 27) {
        var a = document.createElement('option')
        a.append("Lamê Arco Íris	77% Poliéster/23% Metal")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Lamê Bali	65% Poliéster/25% Viscose/10% Metal")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Lamê Blade 5400	80% Metal 20% Poliamida")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Lamê Bril Stripe 427	80% Acetato/20% Metal")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Lamê Brocado Estampado	100% Poliéster")
        document.getElementById("CompComp").appendChild(e)
    }

    if (z == 28) {
        var a = document.createElement('option')
        a.append("Linhão Panamá	67% Poliéster/33% Viscose")
        document.getElementById("CompComp").appendChild(a)
    }

    if (z == 29) {
        var a = document.createElement('option')
        a.append("Linho Bottonê	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Linho Mask	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Linho Misto Cru	50% Algodão/17% Poliéster/13% Viscose/20% Linho")
        document.getElementById("CompComp").appendChild(c)
    }

    if (z == 30) {
        var a = document.createElement('option')
        a.append("Lourex Aveludado	84% Poliamida/16% Metal")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Lourex Bordado Estampado	100% Poliéster	")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Lourex Cristal C/paete	97% Poliéster/3% Metal	")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Lourex Cristal Estampado	100% Poliéster")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Lourex Liso	100% Poliamida")
        document.getElementById("CompComp").appendChild(e)
        var f = document.createElement('option')
        f.append("Lourex Liso	50% Algodão/50% Poliéster")
        document.getElementById("CompComp").appendChild(f)
    }

    if (z == 31) {
        var a = document.createElement('option')
        a.append("Micro Viscose Estampada	62%viscose 38%poliester")
        document.getElementById("CompComp").appendChild(a)
    }

    if (z == 32) {
        var a = document.createElement('option')
        a.append("Microfibra Estampada	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Microfibra Lisa	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 33) {
        var a = document.createElement('option')
        a.append("Microtule	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Microtule Extra	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 34) {
        var a = document.createElement('option')
        a.append("Morim Mineirão	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Morim Tres Marias Misto	70% Algodão/30% Poliéster")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 35) {
        var a = document.createElement('option')
        a.append("Musseline Bordada	100% Poliéster")
        document.getElementById("CompComp")
        var b = document.createElement('option')
        b.append("Musseline Nacarado 248	60% Poliamida/40% Metal")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 36) {
        var a = document.createElement('option')
        a.append("Nylon Aerado	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Nylon Camuflado	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Nylon Dublado	100% Poliéster")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Nylon Liso	100% Poliéster")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Nylon Liso	100% poliamida")
        document.getElementById("CompComp").appendChild(e)
        var f = document.createElement('option')
        f.append("Nylon Sirre Dublado	56% Poliéster/32% Poliuretano/12% Polipropileno")
        document.getElementById("CompComp").appendChild(f)
    }

    if (z == 37) {
        var a = document.createElement('option')
        a.append("Organza Arco Iris C/glitter	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Organza Aveludada C/brilho	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Organza Bordada 2001-000	70% Poliamida/30% Viscose")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Organza Cristal	100% Poliamida")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Organza extra de 90 cm	100% Poliamida")
        document.getElementById("CompComp").appendChild(e)
        var f = document.createElement('option')
        f.append("Organza Fantasia Importada	100% Poliéster")
        document.getElementById("CompComp").appendChild(f)
        var g = document.createElement('option')
        g.append("Organza Laminada 174e	69% poliam/31% Metal")
        document.getElementById("CompComp").appendChild(g)
    }
    if (z == 38) {
        var a = document.createElement('option')
        a.append("Oxford Camuflado	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Oxford Importado	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Oxford Melange	48% Poliéster 52% Viscose")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Oxford Risca de Giz	97% Poliéster/3% Viscose")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Oxford Risca de Giz	100% Poliéster")
        document.getElementById("CompComp").appendChild(e)
    }

    if (z == 39) {
        var a = document.createElement('option')
        a.append("Percal 100% Algodão	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Percal Misto 245	61% Algodão/39% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Percal Misto 250	50% Algodão/50 % Poliéster")
        document.getElementById("CompComp").appendChild(c)
    }

    if (z == 40) {
        var a = document.createElement('option')
        a.append("Piquet Casa de Abelha Misto	66% Poliéster/34% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Piquet Casa de Abelha Misto	75% Poliéster/25% Algodão")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Piquet Casa de Abelha Puro Algodão	100% Algodão")
        document.getElementById("CompComp").appendChild(c)
    }

    if (z == 41) {
        var a = document.createElement('option')
        a.append("Popeline	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Popeline Extra 3016	100% Algodão")
        document.getElementById("CompComp").appendChild(b)
    }

    if (z == 42) {
        var a = document.createElement('option')
        a.append("Sarja Crua 4859 150	100% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Sarja Ecológica C/elastano	97% Algodão/3% Elastano")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Sarja Metalizada Cores	75% Poliéster/15% Metal/10% Poliamida")
        document.getElementById("CompComp").appendChild(c)

    }
    if (z == 43) {
        var a = document.createElement('option')
        a.append("Seda Amassada	100%poliester")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Cetim de Seda Liso	100%seda")
        document.getElementById("CompComp").appendChild(b)
    }

    if(z==44) {
        var a = document.createElement('option')
        a.append("Shantung Brocado Jaipur	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Shantung Judith	80% Poliéster/20% Viscose")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Shantung Polilinho	91% Poliéster/9 % Linho")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Shantung Vestuário	100% Poliéster")
        document.getElementById("CompComp").appendChild(d)
    }

    if(z==45) {
        var a = document.createElement('option')
        a.append("Tac-Tel	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Tac-Tel 4 Cabos	65% Algodão/35% Poliéster")
        document.getElementById("CompComp").appendChild(b)
    }

    if(z==46) {
        var a = document.createElement('option')
        a.append("Tafetá 2020 Estampado	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Tafetá Alpaseda	100% Acetato")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Tafetá Barcelona	52% Poliéster/48% Poliamida")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Tafetá Changeant	64% Poliamida/36% Poliéster")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Tafetá Changeant Metalizado	100% Poliéster")
        document.getElementById("CompComp").appendChild(e)
        var f = document.createElement('option')
        f.append("Tafetá Estampado Metalizado Pvc	90% Poliéster/10% Metal Pvc")
        document.getElementById("CompComp").appendChild(f)
        var g = document.createElement('option')
        g.append("Tafetá Fashion Bordado	60% Poliéster/40% Poliamida")
        document.getElementById("CompComp").appendChild(g)
        var h = document.createElement('option')
        h.append("Tafetá Liso	100% Poliéster")
        document.getElementById("CompComp").appendChild(h)
        var i = document.createElement('option')
        i.append("Tafetá Verão	100% Poliéster")
        document.getElementById("CompComp").appendChild(i)
    }

    if(z == 47) {
        var a = document.createElement('option')
        a.append("Tergal Coteleen	67% Poliéster/33% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Tergal Fitado	100% Poliéster")
        document.getElementById("CompComp").appendChild(b)
        var c= document.createElement('option')
        c.append("Tergal Superleen	67% Poliéster 33% Algodão")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Tergal Verão	78% Poliéster/22% Viscose")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Tergal Verão Extra	64% Poliéster/36% Algodão")
        document.getElementById("CompComp").appendChild(e)
        var f = document.createElement('option')
        f.append("Tergal Xadrez Grande 2051	100% Poliéster")
        document.getElementById("CompComp").appendChild(f)
        var g = document.createElement('option')
        g.append("Tergal Xadrez Grande 2051	50% Algodão 50% Poliéster")
        document.getElementById("CompComp").appendChild(g)
    }

    if(z==48) {
        var a = document.createElement('option')
        a.append("Tie-Dye Estampado	100% Poliéster")
        document.getElementById("CompComp").appendChild(a)
    }

    if(z==49) {
        var a = document.createElement('option')
        a.append("Tnt Plisssado Irizado	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("TNT 50	100% Polipropileno")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Tnt Quadriculado Irizado	100% Poliamida")
        document.getElementById("CompComp").appendChild(c)
    }

    if(z==50) {
        var a = document.createElement('option')
        a.append("Tricolex C/elastano	67% Algodão/30% Poliéster/3% Elastano")
        document.getElementById("CompComp").appendChild(a)
    }

    if(z==51) {
        var a = document.createElement('option')
        a.append("Tricoline Advance Tie Dye	65% Poliéster/35% Algodão")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Tricoline Alaska C/elastano	52% Algodão/44% Poliéster/4% Elastano")
        document.getElementById("CompComp").appendChild(b)
        var c = document.createElement('option')
        c.append("Tricoline Amati	100% Algodão")
        document.getElementById("CompComp").appendChild(c)
        var d = document.createElement('option')
        d.append("Tricoline Bordada Tie Dye	65% Algodão/35% Poliéster")
        document.getElementById("CompComp").appendChild(d)
        var e = document.createElement('option')
        e.append("Tricoline C/lycra	97% Algodão/3% Elastano")
        document.getElementById("CompComp").appendChild(e)
        var f = document.createElement('option')
        f.append("Tricoline Estampada Importada	65% Poliéster / 35% Algodã")
        document.getElementById("CompComp").appendChild(f)
        var g = document.createElement('option')
        g.append("Tricoline Mista Importada	65% Poliéster/35% Algodão")
        document.getElementById("CompComp").appendChild(g)
        var h = document.createElement('option')
        h.append("Tricoline Mista Importada	80% Poliéster/20% Algodão")
        document.getElementById("CompComp").appendChild(h)
        var i = document.createElement('option')
        i.append("Tricoline Mista Importada C/ Risca	90% Poliéster/10% Algodão")
        document.getElementById("CompComp").appendChild(i)
        var j = document.createElement('option')
        j.append("Tricoline Mônaco C/elastano	97% Algodão/3% Elastano")
        document.getElementById("CompComp").appendChild(j)
    }
    if(z==52) {
        var a = document.createElement('option')
        a.append("Tunil K 03	100% Poliamida")
        document.getElementById("CompComp").appendChild(a)
    }
    if (z==53) {
        var a = document.createElement('option')
        a.append("Tweed Vanity	90% Poliéster/7% Acrilico/3% Fio Metal")
        document.getElementById("CompComp").appendChild(a)
        var b = document.createElement('option')
        b.append("Tweed de lã	100%lã")
        document.getElementById("CompComp").appendChild(b)
    }

    if(z==54) {
        var a = document.createElement('option')
        a.append("Veludine	100% poliamida")
        document.getElementById("CompComp").appendChild(a)
    }

    if(z==55) {
        var a = document.createElement('option')
        a.append("Veludo Alemão Importado	65% Viscose/21% Poli amida/14% Liocel")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Veludo Alova Liso Importado	100% Poliéster")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Veludo Amassado	34% Poliam/26% Acrílico//20% Algodão/20% Poliés")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Veludo Ballets Russes	97% Algodão 03% Elastano")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Veludo Bouclê de Malha (Chenille)	100% Poliéster")
        document.getElementById('CompComp').appendChild(e)
        var f = document.createElement('option')
        f.append("Veludo Califórnia	61% Poliéster/39% Algodão")
        document.getElementById('CompComp').appendChild(f)
        var g = document.createElement('option')
        g.append("Veludo Cotele C/ Brilho Importado	97% Algodão 03%elastano")
        document.getElementById('CompComp').appendChild(g)
        var h = document.createElement('option')
        h.append("Veludo Cotele Crown	100% Algodão")
        document.getElementById('CompComp').appendChild(h)
        var i = document.createElement('option')
        i.append("Veludo Devore Pavlova	70% Viscose/30% Poliamida")
        document.getElementById('CompComp').appendChild(i)
        var j = document.createElement('option')
        j.append("Veludo Estampado C/brilho	34% Poliamida/40% Algodão/26% Acetato")
        document.getElementById('CompComp').appendChild(j)
        var k = document.createElement('option')
        k.append("Veludo Estampado Elastano	55% Poliéster/40% Acetato/5% Elastano")
        document.getElementById('CompComp').appendChild(k)
        var l = document.createElement('option')
        l.append("Veludo Estampado Metalizado	40% Poliéster 30% Acrílico 30% Poliamida")
        document.getElementById('CompComp').appendChild(l)
        var m = document.createElement('option')
        m.append("Veludo Flock Manta	100% Poliéster/ Superficie: 100% Poliamida")
        document.getElementById('CompComp').appendChild(m)
        var n = document.createElement('option')
        n.append("Veludo Floral	63%acetato 33%Poliamida")
        document.getElementById('CompComp').appendChild(n)
        var o = document.createElement('option')
        o.append("Veludo Liso Fundo Algodão/Poliéster	Sup:100% Poliamida/ Base:65% Poliéster/35% Algodão")
        document.getElementById('CompComp').appendChild(o)
        var p = document.createElement('option')
        p.append("Veludo Liso Fundo TNT	Base: 100% Polipropileno/ Sup: 100% Poliamida")
        document.getElementById('CompComp').appendChild(p)
        var q = document.createElement('option')
        q.append("Veludo Molhado	Poliamida/26% Acrílico/20% Algodão/20% Poliést")
        document.getElementById('CompComp').appendChild(q)
        var r = document.createElement('option')
        r.append("Veludo Plissado	100% Poliéster")
        document.getElementById('CompComp').appendChild(r)
        var s = document.createElement('option')
        s.append("Veludo Plush C/elastano	92% Poliéster/8% Elastano")
        document.getElementById('CompComp').appendChild(s)
        var t = document.createElement('option')
        t.append("Veludo Plush Importado	100%poliéster")
        document.getElementById('CompComp').appendChild(t)
        var u = document.createElement('option')
        u.append("Veludo de Lycra Belga	87% Poliamida/13% Elastano")
        document.getElementById('CompComp').appendChild(u)
    }

    if(z==56) {
        var a = document.createElement('option')
        a.append("Viscofaille	100% Poliéster")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==57) {
        var a = document.createElement('option')
        a.append("Viscose Lisa	100% Viscose")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==58) {
        var a = document.createElement('option')
        a.append("Voil Amassado	100% Poliéster")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Voil Bordado Ellegance	100% Algodão")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Voil Corttex Flamê	83% Poliéster/17% Viscose")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Voil Cristal	100% Poliamida")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Voil de Algodão Bordado	100% Algodão")
        document.getElementById('CompComp').appendChild(e)
        var f = document.createElement('option')
        f.append("Voil Judith	100% Poliéster")
        document.getElementById('CompComp').appendChild(f)
        var g = document.createElement('option')
        g.append("Voil Maison	50% Algodão/50% Poliéster")
        document.getElementById('CompComp').appendChild(g)
    }
    if(z==59) {
        var a = document.createElement('option')
        a.append("Airstrech Liso	90% Poliamida/10% Elastano")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==60) {
        var a = document.createElement('option')
        a.append("Dry Fit ( Ponto de Arroz )	100% Poliéster")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==61) {
        var a = document.createElement('option')
        a.append("Energy Lisa Fio 96	92% poliéster/8% Elastano")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==62) {
        var a = document.createElement('option')
        a.append("Forro Poliamida Branco/bege (Tubular)	100% Poliamida")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Forro Poliamida Cores (Tubular)	100% Poliamida")
        document.getElementById('CompComp').appendChild(b)
    }

    if(z==63) {
        var a = document.createElement('option')
        a.append("Helanca Bailarina	100% Poliéster")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Helanca Escolar Branca/Bege (Tubular)	100% Poliamida")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Helanca Escolar Cores (Tubular)	100% Poliamida")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Helanca Escolar Poliéster (Tubular)	100% Poliéster")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Helanca Light	100% Poliéster")
        document.getElementById('CompComp').appendChild(e)
    }

    if(z==64) {
        var a = document.createElement('option')
        a.append("Liganete Fashion Estampada	100% Poliamida")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Liganete Fashion Lisa	100% Poliamida")
        document.getElementById('CompComp').appendChild(b)
    }

    if(z==65) {
        var a = document.createElement('option')
        a.append("Lenatex Estampado Camuflada/Selvagem	84% Poliamida/16% Elastano")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Lenatex  Estampada Opaca	84% Poliamida/16% Elastano")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Lenatex Praia Liso Opaca	84% Poliamida/16% Elastano")
        document.getElementById('CompComp').appendChild(c)
    }

    if(z==66) {
        var a = document.createElement('option')
        a.append("Malha Algodão 24/1	100% Algodão")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Malha 30.1 Cardada Branca e Claras	100% Algodão")
        document.getElementById('CompComp').appendChild(b)
        var c = document.createElement('option')
        c.append("Malha Algodão 30/88 Mesclada	100% Algodão")
        document.getElementById('CompComp').appendChild(c)
        var d = document.createElement('option')
        d.append("Malha Arrastão fina	100% Poliéster")
        document.getElementById('CompComp').appendChild(d)
        var e = document.createElement('option')
        e.append("Malha Arrastão Grossa	100% Poliéster")
        document.getElementById('CompComp').appendChild(e)
        var f = document.createElement('option')
        f.append("Malha Canelada	62% Poliéster/34% Viscose/4% Elastano")
        document.getElementById('CompComp').appendChild(f)
        var g = document.createElement('option')
        g.append("Malha Tubular Extra	100% Poliéster")
        document.getElementById('CompComp').appendChild(g)
        var h = document.createElement('option')
        h.append("Malha PV (Tubular)	75% Poliéster/25% Viscose")
        document.getElementById('CompComp').appendChild(h)
    }

    if(z==67) {
        var a = document.createElement('option')
        a.append("Moletom Tubular	50% Algodão/50% Poliéster")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==68) {
        var a = document.createElement('option')
        a.append("Tule de Lycra	82% Poliamida/18% Elastano")
        document.getElementById('CompComp').appendChild(a)
    }

    if(z==69) {
        var a = document.createElement('option')
        a.append("Viscolycra Estampada	94% Viscose/6% Elastano")
        document.getElementById('CompComp').appendChild(a)
        var b = document.createElement('option')
        b.append("Viscolycra Lisa	65% Poliéster/31% Viscose/4% Elastano")
        document.getElementById('CompComp').appendChild(b)
    }
}
